// src/ui/MainContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './MainContents.css'
import axios from 'axios'

interface Apart {
  province_nm: string
  city_nm: string
  apt_name: string
  rank: number
  exclusive_area: string
  serial_num: string
  dong_nm: string
  max_trans_price: string
}

function parsePrice(price: string) {
  let fPrice = parseFloat(price)
  return (fPrice / 10000).toString() + '억'
}

async function fetchApartList() {
  let response = await axios.get<Apart[]>('https://api.apart-back.gq:9999/popular?top=10')

  return response.data
}

function MainContents() {
  const [apartList, setApartList] = useState<Apart[]>([])

  // let aparts = [
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  //   { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  // ]

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
            <>
              <div>
                <div className="ApartRank">{apart.rank}</div>
                <div className="ApartNameAndAddress">
                  <div className="ApartName">{apart.apt_name + ' (전용면적 : ' + apart.exclusive_area + 'm²)'}</div>
                  <div className="ApartAddress">{apart.province_nm + ' ' + apart.city_nm + ' ' + apart.dong_nm}</div>
                </div>
                <div className="ApartPrice">{parsePrice(apart.max_trans_price)}</div>
              </div>
              <div className="ApartBorder" />
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default MainContents
