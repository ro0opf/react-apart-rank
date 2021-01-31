// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import Apart from '../../data/Apart'
import { province } from '../../data/Static'
import ApartRankList from '../ApartRankList'
import { gAreaRank } from './AreaAPI'
import Wrapper from './AreaContents.css'

interface iProvince {
  name: string
  type: string
}

function AreaContents() {
  let yearList = [{ year: '1년' }, { year: '3년' }, { year: '5년' }]
  let [selectYear, setSelectYear] = useState<number>(0)
  let [apartRank, setApartRank] = useState<Apart[]>([])
  let [selectProvince, setSelectProvince] = useState<iProvince>()

  useEffect(() => {
    async function fetchData() {
      let pApartRank = await gAreaRank()
      setApartRank(pApartRank)
    }
    fetchData()
  }, [])

  return (
    <Wrapper>
      <div className="SelectGroup">
        <div className="SelectRow1">
          <select
            className="Area"
            onChange={(e) => {
              setSelectProvince(e.target)
              console.log(selectProvince);
            }}
          >
            {province.map((value, index) => {
              return (
                <option value={value.type} key={index}>
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
      <ApartRankList
        apartList={apartRank}
        circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)"
        type={1}
      />
    </Wrapper>
  )
}

export default AreaContents
