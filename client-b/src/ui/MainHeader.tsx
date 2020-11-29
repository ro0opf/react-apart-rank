import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Wrapper from './MainHeader.css'
import MenuLogoUrl from '../image/icon/btn_menu.svg'
import RankingUrl from '../image/icon/btn_ranking.svg'
import AreaUrl from '../image/icon/btn_area.svg'
import InfoUrl from '../image/icon/btn_info.svg'
import RealEstateUrl from '../image/icon/btn_realestate.svg'

function MainHeader() {
  let [navIdx, setNavIdx] = useState(-1)
  let menus = [
    { imgSrc: AreaUrl, imgAlt: 'Area Icon', imgName: '지역별 분석', to: 'ranking' },
    { imgSrc: RankingUrl, imgAlt: 'Ranking Icon', imgName: '랭킹', to: 'aa' },
    { imgSrc: InfoUrl, imgAlt: 'Info Icon', imgName: '분양정보', to: 'bb' },
    { imgSrc: RealEstateUrl, imgAlt: 'RealEstate Icon', imgName: '부동산 정보', to: 'cc' },
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
          <div>APART.GG</div>
        </div>
      </div>

      <div className="SearchApart">
        <input type="text" placeholder="아파트 이름" />
      </div>
      <div className="TopNav">
        {menus.map((menu, index) => {
          return (
            <Link to={menu.to}>
              <div
                onClick={() => {
                  setNavIdx(index)
                }}
                className={navIdx == index ? 'OnNav' : ''}
              >
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
