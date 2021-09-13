// src/ui/real_estate_data/RealEstateDataContents.tsx
import { Button, TextField, TextFieldProps } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { getRealEstateDataDownload } from './RealEstateDataAPI'
import Wrapper from './RealEstateDataContents.css'

function RealEstateDataContents() {
  const [lng, setLng] = useState<number>(0)
  const [lat, setLat] = useState<number>(0)
  const [generationNumber, setGenerationNumber] = useState<number>(0)

  return (
    <Wrapper>
      <TextField
        onChange={((e) => {setLng(parseFloat(e.target.value))})}
        id="outlined-search"
        label="경도"
        type="search"
        variant="outlined"
        placeholder="126.553639"
      />
      <TextField
        onChange={((e) => {setLat(parseFloat(e.target.value))})}
        id="outlined-search"
        label="위도"
        type="search"
        variant="outlined"
        placeholder="37.3465"
      />
      <TextField
        onChange={((e) => {setGenerationNumber(parseFloat(e.target.value))})}
        id="outlined-search"
        label="검색 세대수( 000세대 이상으로 검색됩니다 )"
        type="search"
        variant="outlined"
        placeholder="숫자만 입력하세요"
      />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={() => {
          getRealEstateDataDownload(lng, lat, generationNumber)
        }}
      >
        Submit
      </Button>
    </Wrapper>
  )
}

export default RealEstateDataContents
