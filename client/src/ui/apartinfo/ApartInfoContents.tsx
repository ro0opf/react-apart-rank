// src/ui/appartinfo/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import Wrapper from './ApartInfoContents.css'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryLine } from 'victory'
import theme from '../../styles/theme'
import ApartRankList from '../ApartRankList'
import ApartRankInfo from './ApartRankInfo'
import ApartInfo from '../../data/ApartInfo'
import ShareSNS from './ShareSNS'
import env from '../../data/Env'
import DiamondUrl from '../../image/icon/ic_diamond.svg'
import Parse from '../../common/Parse'

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
        timeout: env.timeout,
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
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

async function fetchApartInfo(serial_num: string, exclusive_area: string) {
  try {
    let response = await axios.get<ApartInfo>(
      'https://api.apart-back.gq:9999/search/detail?serial_num=' + serial_num + '&exclusive_area=' + exclusive_area,
      {
        timeout: env.timeout,
      },
    )
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

async function fetchApartInfoWithoutSN(pr_cd: string, ct_cd: string, dong_cd: string, addr_cd: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + pr_cd, {
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return { exclusive_area: [] }
  }
}

async function fetchSharpRiseRank() {
  try {
    let response = await axios.get<Apart[]>('https://api.apart-back.gq:9999/search/soaring', {
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

function ApartInfoContents(props: iProps) {
  const [areaList, setAreaList] = useState<AreaList>({ exclusive_area: [] })
  const [apartInfo, setApartInfo] = useState<ApartInfo>()
  const [apartArea, setApartArea] = useState<string>()
  const [apartRank, setApartRank] = useState<Apart[]>([])
  let serial_num = props.serial_num

  
  useEffect(() => {
    async function fetchData() {
      let pAreaList: AreaList = { exclusive_area: [] }
      let pApartRank = await fetchSharpRiseRank()
      if (serial_num != undefined) {
        pAreaList = await fetchExclusive(serial_num)
      } else {
      }

      setApartRank(pApartRank)
      setAreaList(pAreaList)
      setApartArea(pAreaList.exclusive_area[0].toString())
    }

    console.log(123123123123);
    
    fetchData()

    return () => {}
  }, [serial_num])

  useEffect(() => {
    async function fetchData() {
      if (apartArea == undefined) {
        return
      }

      let pApartInfo = await fetchApartInfo(serial_num, apartArea)

      setApartInfo(pApartInfo)
    }

    fetchData()

    return () => {}
  }, [apartArea])

  return (
    <Wrapper>
      <div className="ApartName">
        <div className="Name">{apartInfo?.my_apt_dtl.apt_name}</div>
        <div className="SelectSize">
          <select
            className="Area"
            value={apartArea}
            onChange={(e) => {
              setApartArea(e.target.value)
            }}
          >
            {areaList.exclusive_area.map((value, index) => {
              return (
                <option value={value.toString()} key={index}>
                  {value + 'm2'}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div className="RankAndPrice">
        <img src={DiamondUrl} />
        <div className="Price">
          <span className="Title">최근 실거래 기준 6개월 평균</span>
          <span className="Price">{Parse.priceToKor(apartInfo?.my_apt_dtl.trans_hst[0].trans_price) + '원'}</span>
        </div>
      </div>

      <div className="AllAndArea">
        <ApartRankInfo apartInfo={apartInfo} rankColor={theme.color.gradation1} type="전국" />
        <ApartRankInfo apartInfo={apartInfo} rankColor={theme.color.gray2} type="지역별" />
      </div>

      <div className="ApartVolumeRank SubTitle">
        <div>급상승 순위</div>
      </div>

      <ApartRankList apartList={apartRank} circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)" />
      <ShareSNS />
    </Wrapper>
  )
}

export default ApartInfoContents
