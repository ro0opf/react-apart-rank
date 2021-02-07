// src/ui/ranking/RankingContents.tsx
import React, { useEffect, useState } from 'react'
import { ApartRank } from '../../data/Apart'
import { province } from '../../data/Static'
import theme from '../../styles/theme'
import ApartRankList from '../ApartRankList'
import PageNav from '../common/PageNav'
import { gRanking } from './RankingAPI'
import Wrapper from './RankingContents.css'

function RankingContents() {
  let typeList = [
    { type: '최근 3개월 기준', code: '3' },
    { type: '최근 1년 기준', code: '12' },
  ]
  let [typeIndex, setTypeIndex] = useState(0)
  let [selectProvinceCode, setSelectProvinceCode] = useState<string>('00')
  let [selectExclusive, setSelectExclusive] = useState<number>(1)
  let [apartRank, setApartRank] = useState<ApartRank>()
  let exclusiveList = [
    { type: '~10평', code: 1 },
    { type: '10평대', code: 2 },
    { type: '20평대', code: 3 },
    { type: '30평대', code: 4 },
    { type: '40평대', code: 5 },
    { type: '50평대', code: 6 },
    { type: '60평대', code: 7 },
    { type: '70평~', code: 8 },
  ]

  useEffect(() => {
    async function fetchRanking() {
      let resApartRank = await gRanking(typeList[typeIndex].code, selectProvinceCode, selectExclusive, 1)
      setApartRank(resApartRank)
    }

    fetchRanking()
  }, [typeIndex, selectProvinceCode, selectExclusive])
  return (
    <Wrapper>
      <div className="SelectGroup">
        <ul className="SelectType">
          {typeList.map((type, index) => {
            return (
              <li key={index} className={typeIndex == index ? 'Clicked' : ''} onClick={() => setTypeIndex(index)}>
                {type.type}
              </li>
            )
          })}
        </ul>
        <div className="SelectRow2">
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
          <select
            className="Area"
            onChange={(e) => {
              setSelectExclusive(parseInt(e.target.value))
            }}
          >
            {exclusiveList.map((value, index) => {
              return (
                <option value={value.code} key={index}>
                  {value.type}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <ApartRankList
        apartList={apartRank == undefined ? [] : apartRank.rank_dtl}
        circleBackground={theme.color.gradation1}
        type={2}
      />
      <PageNav />
    </Wrapper>
  )
}

export default RankingContents
