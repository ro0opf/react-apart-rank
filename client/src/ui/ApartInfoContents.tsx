// src/ui/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../data/Apart'
import Wrapper from './ApartInfoContents.css'
import axios from 'axios'
import bgApart from '../image/bg_apart.jpg'

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
        <img src={bgApart} />
      </div>
      <div className="ApartRank"></div>
    </Wrapper>
  )
}

export default ApartInfoContents
