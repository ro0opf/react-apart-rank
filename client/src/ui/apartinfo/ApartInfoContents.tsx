// src/ui/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import Wrapper from './ApartInfoContents.css'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryLine } from 'victory'
import theme from '../../styles/theme'
import ApartRankList from '../ApartRankList'

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

  // useEffect(() => {
  //   async function fetchData() {
  //     setApart(await fetchApart(serialNum))
  //   }
  //   fetchData()
  // }, [])

  return (
    <Wrapper>
      <div className="ApartName">풍림아이원</div>
      <div className="BgApart"></div>
      <div className="ApartRank">
        <div className="national"></div>
        <div className="local"></div>
      </div>
      <div className="ApartVolumeRank SubTitle">
        <div>급상승 순위</div>
      </div>
      <ApartRankList apartList={dummyData} circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)" />
    </Wrapper>
  )
}

export default ApartInfoContents
