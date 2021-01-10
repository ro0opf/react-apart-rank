// src/ui/ranking/RankingContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartRankList from '../ApartRankList'
import PageNav from '../common/PageNav'
import Wrapper from './RankingContents.css'

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
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 6,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 7,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 8,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 9,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 10,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
]

function RankingContents() {
  return (
    <Wrapper>
      <div className="SelectGroup">
        <div className="SelectRow1">
          <div>최근 3개월 기준</div>
          <div>최근 1년 기준</div>
        </div>
        <div className="SelectRow2">
          <select className="Area">
            <option value="00" defaultChecked>
              전국
            </option>
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">인천</option>
            <option value="04">전주</option>
          </select>
          <select className="Area">
            <option value="00" defaultChecked>
              평수
            </option>
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">인천</option>
            <option value="04">전주</option>
          </select>
        </div>
      </div>
      <ApartRankList apartList={dummyData} circleBackground="linear-gradient(180deg, #76b9f7 0%, #2e94f2 100%);" />
      <PageNav />
    </Wrapper>
  )
}

export default RankingContents
