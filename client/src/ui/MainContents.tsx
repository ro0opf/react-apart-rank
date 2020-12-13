// src/ui/MainContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './MainContents.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Apart from '../data/Apart'

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
    exclusive_area: '66',
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
    exclusive_area: '67',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 9,
    exclusive_area: '77',
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

function parsePrice(price: string) {
  let fPrice = parseFloat(price)
  return (fPrice / 10000).toString() + '억'
}

async function fetchApartList() {
  try {
    let response = await axios.get<Apart[]>('https://api.apart-back.gq:9999/popular?top=10', { timeout: 1000 })
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

function MainContents() {
  const [apartList, setApartList] = useState<Apart[]>([])

  useEffect(() => {
    async function fetchData() {
      setApartList(await fetchApartList())
    }
    fetchData()
  }, [])

  return (
    <Wrapper>
      <div className="PopularApart">
        <span>인기 검색 아파트 순위</span>
      </div>

      <div className="PopularApartRank">
        {apartList.map((apart, index) => {
          return (
            <Link
              to={{
                pathname: '/apart-info/' + apart.serial_num,
              }}
              key={index}
            >
              <div>
                <div className="ApartRank">{apart.rank}</div>
                <div className="ApartNameAndAddress">
                  <div className="ApartName">{apart.apt_name + ' (전용면적 : ' + apart.exclusive_area + 'm²)'}</div>
                  <div className="ApartAddress">{apart.province_nm + ' ' + apart.city_nm + ' ' + apart.dong_nm}</div>
                </div>
                <div className="ApartPrice">{parsePrice(apart.max_trans_price)}</div>
              </div>
              <div className="ApartBorder" />
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default MainContents
