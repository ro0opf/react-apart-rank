// src/ui/apartinfo/ApartRankInfo.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartRankList from '../ApartRankList'
import Wrapper from './ApartRankInfo.css'
import DiamondUrl from '../../image/icon/ic_diamond.svg'

interface iProps {
  rankColor: string
}

function ApartRankInfo(props: iProps) {
  return (
    <Wrapper rankColor={props.rankColor}>
      <div className="RankImg">
        <img src={DiamondUrl}></img>
      </div>

      <div className="Rank">
        <div className="Title">풍림아이원평당 전국 순위</div>
        <div className="ApartRank">42위</div>
      </div>

      <div className="Apart">
        <div>
          <div>전국 평당 가격 1위</div>
          <div>개포주공1단지</div>
        </div>

        <div className="ApartRank">7.5천만원</div>
      </div>
    </Wrapper>
  )
}

export default ApartRankInfo
