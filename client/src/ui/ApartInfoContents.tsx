// src/ui/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../data/Apart'
import Wrapper from './ApartInfoContents.css'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryLine } from 'victory'
import theme from '../styles/theme'

let dummyData: Apart = {
  province_nm: '12',
  city_nm: '124124',
  apt_name: '풍림 아이원',
  rank: 1,
  exclusive_area: '98',
  serial_num: '1',
  dong_nm: '124124',
  max_trans_price: '124000',
}

async function fetchApart(serialNum: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + serialNum, {
      timeout: 1000,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

interface iProps {
  serialNum: string
}

function ApartInfoContents(props: iProps) {
  const [apart, setApart] = useState<Apart>()
  let serialNum = props.serialNum

  useEffect(() => {
    async function fetchData() {
      setApart(await fetchApart(serialNum))
    }
    fetchData()
  }, [])

  return (
    <Wrapper>
      <div className="ApartName">{apart?.apt_name}</div>
      <div className="BgApart">
      </div>
      <div className="ApartRank">
        <div className="national"></div>
        <div className="local"></div>
      </div>
      <div>
        <div>전국 급상승 1위</div>
        <VictoryChart>
          <VictoryBar
            style={{ data: { fill: theme.color.sub } }}
            alignment="start"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
          <VictoryLine
            interpolation="natural"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
        </VictoryChart>
      </div>
      <div>
        <div>지역 내 급상승 1위</div>
        <VictoryChart>
          <VictoryLine
            interpolation="natural"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
        </VictoryChart>
      </div>
      <div>
        <div>우리집 급상승 순위</div>
        <VictoryChart>
          <VictoryLine
            interpolation="natural"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
        </VictoryChart>
      </div>
    </Wrapper>
  )
}

export default ApartInfoContents
