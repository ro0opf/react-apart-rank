import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Apart } from '../data/Apart'
import env from '../data/Env'
import Wrapper from './SearchList.css'

interface iProps {
  keyword: string
  setKeyword: Function
}

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

async function fetchApartList(keyword?: string) {
  console.log(keyword)

  try {
    let response = await env.instance.get<Apart[]>('search?apt_name=' + keyword + '&related=10')
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

function SearchList(props: iProps) {
  let [apartList, setApartList] = useState<Apart[]>([])

  useEffect(() => {
    async function fetchData(keyword?: string) {
      setApartList(await fetchApartList(keyword))
    }

    if (props.keyword != undefined && props.keyword != '') {
      fetchData(props.keyword)
    }
  }, [props.keyword])

  return (
    <Wrapper>
      <ul hidden={props.keyword.length < 2 || apartList.length == 0 ? true : false}>
        {apartList.map((apart, index) => {
          return (
            <li key={index}>
              <Link
                to={{
                  pathname:
                    '/apart-info/' +
                    (apart.serial_num == null || apart.serial_num == undefined || apart.serial_num.length < 2
                      ? '0'
                      : apart.serial_num) +
                    '/' +
                    apart.pr_cd +
                    '/' +
                    apart.ct_cd +
                    '/' +
                    apart.dong_cd +
                    '/' +
                    apart.addr_cd,
                }}
                onClick={() => {
                  props.setKeyword('')
                }}
              >
                {apart.apt_name}
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default SearchList
