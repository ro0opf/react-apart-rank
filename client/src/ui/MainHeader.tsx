import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './MainHeader.css'
import MenuLogoUrl from '../image/icon/btn_menu.svg'
import RankingUrl from '../image/icon/btn_ranking.svg'
import AreaUrl from '../image/icon/btn_area.svg'
import InfoUrl from '../image/icon/btn_info.svg'
import RealEstateUrl from '../image/icon/btn_realestate.svg'

interface iProps {
  navIdx?: number
}

function MainHeader(props: iProps) {
  let navIdx = props.navIdx

  let menus = [
    { imgSrc: AreaUrl, imgAlt: 'Area Icon', imgName: '지역별 분석', to: '/area' },
    { imgSrc: RankingUrl, imgAlt: 'Ranking Icon', imgName: '랭킹', to: '/ranking' },
    { imgSrc: InfoUrl, imgAlt: 'Info Icon', imgName: '분양정보', to: '/info' },
    { imgSrc: RealEstateUrl, imgAlt: 'RealEstate Icon', imgName: '부동산 정보', to: '/real-estate' },
  ]

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
      <div className="Logo">
        <img src={MenuLogoUrl} alt="Menu Icon" />
        <div className="Title">
          <Link to="/">APART.GG</Link>
        </div>
      </div>

      <div className="SearchApart">
        <input type="text" placeholder="아파트 이름" />
      </div>
      <div className="TopNav">
        {menus.map((menu, index) => {
          return (
            <Link
              to={{
                pathname: menu.to,
                state: {
                  index,
                },
              }}
            >
              <div className={navIdx == index ? 'OnNav' : ''}>
                <img src={menu.imgSrc} alt={menu.imgAlt} />
                <div>{menu.imgName}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default MainHeader
