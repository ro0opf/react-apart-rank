// src/ui/apartinfo/ApartRankInfo.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartRankList from '../ApartRankList'
import Wrapper from './ApartRankInfo.css'
import DiamondUrl from '../../image/icon/ic_diamond.svg'
import ApartInfo from '../../data/ApartInfo'

interface iProps {
  rankColor : string
  apartInfo? : ApartInfo
}

function ApartRankInfo(props: iProps) {
  return (
    <Wrapper rankColor={props.rankColor}>
      <div className="RankImg">
        <img src={DiamondUrl}></img>
      </div>

      <div className="Rank">
        <div className="Title">풍림아이원 평당 전국 순위</div>
        <div className="ApartRank">{props.apartInfo == undefined ? "" : props.apartInfo.wide_my_rank}위</div>
      </div>

      <div className="Apart">
        <div>
          <div>전국 평당 가격 1위</div>
          <div>{props.apartInfo == undefined ? "" : props.apartInfo.wide_top_nm}</div>
        </div>

        <div className="ApartRank">{props.apartInfo == undefined ? "" : props.apartInfo.wide_pr_cd}만원</div>
      </div>
    </Wrapper>
  )
}

export default ApartRankInfo
