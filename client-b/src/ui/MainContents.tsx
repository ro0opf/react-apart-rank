// src/ui/MainContents.tsx
import React, { useState } from 'react'
import Wrapper from './MainContents.css'

function parsePrice(price: string) {
  let fPrice = parseFloat(price)
  return (fPrice / 100000000).toString() + '억'
}

function MainContents() {
  let aparts = [
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
    { apartName: '풍림아이원 (25.7평)', apartAddress: '부산광역시 북구 금곡동', apartPrice: '2530000000' },
  ]

  return (
    <Wrapper>
      <div className="PopularApart">
        <span>인기 검색 아파트 순위</span>
      </div>

      <div className="PopularApartRank">
        {aparts.map((apart, index) => {
          return (
            <>
              <div>
                <div className="ApartRank">{index + 1}</div>
                <div className="ApartNameAndAddress">
                  <div className="ApartName">{apart.apartName}</div>
                  <div className="ApartAddress">{apart.apartAddress}</div>
                </div>
                <div className="ApartPrice">{parsePrice(apart.apartPrice)}</div>
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
