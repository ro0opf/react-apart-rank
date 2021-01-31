// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartPrice from '../../data/ApartPrice'
import { province } from '../../data/Static'
import ApartRankList from '../ApartRankList'
import { gAreaPrice, gAreaRank } from './AreaAPI'
import Wrapper from './AreaContents.css'

function AreaContents() {
  let yearList = [
    { name: '1년', code: '1' },
    { name: '3년', code: '3' },
    { name: '5년', code: '5' },
  ]
  let [selectYear, setSelectYear] = useState<number>(0)
  let [apartRank, setApartRank] = useState<Apart[]>([])
  let [selectProvinceCode, setSelectProvinceCode] = useState<string>('00')
  let [apartPrice, setApartPrice] = useState<ApartPrice>()

  useEffect(() => {
    async function fetchAreaRank() {
      let pApartRank = await gAreaRank(selectProvinceCode)
      setApartRank(pApartRank)
    }

    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartPrice(pAreaPriceList)
    }

    fetchAreaRank()
    fetchAreaPrice()
  }, [selectProvinceCode])

  useEffect(() => {
    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartPrice(pAreaPriceList)
    }

    fetchAreaPrice()
  }, [selectYear])

  return (
    <Wrapper>
      <div className="SelectGroup">
        <div className="SelectRow1">
          <select
            className="Area"
            onChange={(e) => {
              setSelectProvinceCode(e.target.value)
            }}
          >
            {province.map((value, index) => {
              return (
                <option value={value.code} key={index}>
                  {value.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="SelectRow2">
          {yearList.map((year, index) => {
            return (
              <div
                className={selectYear == index ? 'SelectedYear' : ''}
                onClick={() => {
                  setSelectYear(index)
                }}
                key={index}
              >
                {year.name}
              </div>
            )
          })}
        </div>
      </div>
      <div className="ChartTitle SubTitle">
        <span>지역구 아파트 가격 변화</span>
      </div>

      <div className="PriceChart">
      </div>

      <div className="ApartVolumeRank SubTitle">
        <div>현재 거래량 많은 아파트</div>
        <div>TOP 5</div>
      </div>
      <ApartRankList
        apartList={apartRank}
        circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)"
        type={1}
      />
    </Wrapper>
  )
}

export default AreaContents
