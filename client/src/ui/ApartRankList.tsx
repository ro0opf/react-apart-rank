// src/ui/ApartRankList.css.tsx
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Apart from '../data/Apart'
import Wrapper from './ApartRankList.css'

interface iProps {
  apartList: Apart[]
  circleBackground: string
}

function parsePrice(price: string) {
  let fPrice = parseFloat(price)
  return (fPrice / 10000).toString() + '억'
}

function ApartRankList(props: iProps) {
  return (
    <Wrapper circleBackground={props.circleBackground}>
      <div className="PopularApartRank">
        {props.apartList.map((apart, index) => {
          return (
            <Link
              to={{
                pathname: '/apart-info/' + apart.serial_num +'/' + apart.pr_cd + '/' + apart.ct_cd + '/' + apart.dong_cd + '/' + apart.addr_cd,
              }}
              key={index}
            >
              <div>
                <div className="ApartRank">
                  <div />
                  <span>{apart.rank}</span>
                </div>
                <div className="ApartNameAndAddress">
                  <div className="ApartName">{apart.apt_name + ' (전용면적 : ' + apart.exclusive_area + 'm²)'}</div>
                  <div className="ApartAddress">{apart.province_nm + ' ' + apart.city_nm + ' ' + apart.dong_nm}</div>
                </div>
                <div className="ApartPrice">{parsePrice(apart.max_trans_price)}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ApartRankList
