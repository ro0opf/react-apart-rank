// src/ui/area/AreaContents.tsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import Apart from '../../data/Apart'
import env from '../../data/Env'
import ApartRankList from '../ApartRankList'
import Wrapper from './AreaContents.css'

let dummyData: Apart[] = [
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 1,
    exclusive_area: '98',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '124000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 2,
    exclusive_area: '124',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '24000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 3,
    exclusive_area: '32',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 4,
    exclusive_area: '44',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 5,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
]

async function fetchAreaRank() {
  try {
    let response = await axios.get<Apart[]>('https://api.apart-back.gq:9999/analysis/volume?range=00&related=5', {
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

function AreaContents() {
  let yearList = [{ year: '1년' }, { year: '3년' }, { year: '5년' }]
  let [selectYear, setSelectYear] = useState<number>(0)
  let [apartRank, setApartRank] = useState<Apart[]>([])

  useEffect(() => {
    async function fetchData() {
      let pApartRank = await fetchAreaRank()
      setApartRank(pApartRank)
    }
    fetchData()
  }, [])
  return (
    <Wrapper>
      <div className="SelectGroup">
        <div className="SelectRow1">
          <select className="Area">
            <option value="00" defaultChecked>
              전국
            </option>
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">인천</option>
            <option value="04">전주</option>
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
              >
                {year.year}
              </div>
            )
          })}
        </div>
      </div>
      <div className="ChartTitle SubTitle">
        <span>지역구 아파트 가격 변화</span>
      </div>

      <div className="PriceChart">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            interpolation="natural"
            style={{ data: { stroke: '#EE5829' } }}
            data={[
              { x: 1, y: 12 },
              { x: 2, y: 5 },
              { x: 3, y: 8 },
              { x: 4, y: 2 },
              { x: 5, y: 5 },
            ]}
          />
          <VictoryLine
            interpolation="natural"
            style={{ data: { stroke: '#6180EE' } }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
          <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}억`} />
          <VictoryAxis tickFormat={(tick) => tick} />
        </VictoryChart>
      </div>

      <div className="ApartVolumeRank SubTitle">
        <div>현재 거래량 많은 아파트</div>
        <div>TOP 5</div>
      </div>
      <ApartRankList apartList={apartRank} circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)" type={1}/>
    </Wrapper>
  )
}

export default AreaContents
