// src/ui/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import Wrapper from './ApartInfoContents.css'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryLine } from 'victory'
import theme from '../../styles/theme'
import ApartRankList from '../ApartRankList'
import ApartRankInfo from './ApartRankInfo'

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

interface iProps {
  serial_num: string
  pr_cd: string
  ct_cd: string
  dong_cd: string
  addr_cd: string
}

interface AreaList {
  exclusive_area: number[]
}

async function fetchExclusive(serial_num: string) {
  try {
    let response = await axios.get<AreaList>(
      'https://api.apart-back.gq:9999/search/exclusive?serial_num=' + serial_num,
      {
        timeout: 1000,
      },
    )
    return response.data
  } catch (error) {
    console.log(error)
    return { exclusive_area: [] }
  }
}

async function fetchExclusiveWithoutSN(serial_num: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + serial_num, {
      timeout: 1000,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

async function fetchApart(serial_num: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + serial_num, {
      timeout: 1000,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

async function fetchApartWithoutSN(pr_cd: string, ct_cd: string, dong_cd: string, addr_cd: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + pr_cd, {
      timeout: 1000,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return { exclusive_area: [] }
  }
}

function ApartInfoContents(props: iProps) {
  const [areaList, setAreaList] = useState<AreaList>({ exclusive_area: [] })
  const [apart, setApart] = useState<Apart>()
  const [apartArea, setApartArea] = useState<string>('00')
  let serial_num = props.serial_num

  useEffect(() => {
    async function fetchData() {
      if (serial_num != undefined) {
        setAreaList(await fetchExclusive(serial_num))
      } else {
      }
    }
    fetchData()
  }, [])

  return (
    <Wrapper>
      <div className="ApartName">
        <span>풍림아이원</span>
        <div className="SelectSize">
          <select
            className="Area"
            value={apartArea}
            onChange={() => {
              console.log('Asefasef')
            }}
          >
            <option value="00">평수</option>
            <option value="01"> qw</option>
            <option value="02">14</option>
            <option value="03">42</option>
            {/* {areaList.exclusive_area.map((value, index) => {
              return (
                <option value={value.toString()} key={index}>
                  {value + 'm2'}
                </option>
              )
            })} */}
          </select>
        </div>
      </div>
      <ApartRankInfo rankColor={theme.color.apartInfoYellow} />
      <ApartRankInfo rankColor={theme.color.apartInfoBlue} />
      <div className="ApartVolumeRank SubTitle">
        <div>급상승 순위</div>
      </div>
      <ApartRankList apartList={dummyData} circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)" />
    </Wrapper>
  )
}

export default ApartInfoContents
