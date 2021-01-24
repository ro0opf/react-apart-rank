// src/ui/apartinfo/ApartRankInfo.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartRankList from '../ApartRankList'
import Wrapper from './ApartRankInfo.css'
import DiamondUrl from '../../image/icon/ic_diamond.svg'
import ApartInfo from '../../data/ApartInfo'

interface iProps {
  rankColor: string
  type: string
  apartInfo?: ApartInfo
}

function ApartRankInfo(props: iProps) {
  return (
    <Wrapper rankColor={props.rankColor}>
      <div className="RankImg">
        <span>{props.type}</span>
      </div>

      <div className="Rank">
        <div className="Border" />

        <div className="TitleAndRank">
          <div className="Title">{props.apartInfo?.my_apt_dtl.apt_name} 평당</div>
          <div className="Title">{props.type} 순위</div>
          <div className="ApartRank">
            {props.apartInfo == undefined
              ? ''
              : props.type == '전국'
              ? props.apartInfo.wide_my_rank
              : props.apartInfo.local_my_rank}
            위
          </div>
        </div>
      </div>

      <div className="Apart">
        <div className="Border" />
        <div className="TitleAndRank">
          <div>{props.type} 평당 가격 1위</div>
          <div className="ApartRank">
            {props.apartInfo == undefined
              ? ''
              : props.type == '전국'
              ? props.apartInfo.wide_top_nm
              : props.apartInfo.local_top_nm}
          </div>

          <div className="ApartRank">
            {props.apartInfo == undefined
              ? ''
              : props.type == '전국'
              ? props.apartInfo.wide_pr_cd
              : props.apartInfo.local_top_pr_cd}
            만원
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ApartRankInfo
