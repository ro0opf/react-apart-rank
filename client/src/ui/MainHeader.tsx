import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './MainHeader.css'
import SearchUrl from '../image/icon/btn_search.svg'
import MenuLogoUrl from '../image/icon/btn_menu.svg'
import RankingUrl from '../image/icon/btn_ranking.svg'
import AreaUrl from '../image/icon/btn_area.svg'
import SalesInfoUrl from '../image/icon/btn_salesinfo.svg'
import RealEstateUrl from '../image/icon/btn_realestate.svg'
import SearchList from './SearchList'

interface iProps {
  navIdx?: number
}

function MainHeader(props: iProps) {
  let [keyword, setKeyword] = useState<string>()
  let navIdx = props.navIdx
  let menus = [
    { imgSrc: AreaUrl, imgAlt: 'Area Icon', imgName: '지역별 분석', to: '/area' },
    { imgSrc: RankingUrl, imgAlt: 'Ranking Icon', imgName: '랭킹', to: '/ranking' },
    { imgSrc: SalesInfoUrl, imgAlt: 'SalesInfo Icon', imgName: '분양정보', to: '/sales-info' },
    { imgSrc: RealEstateUrl, imgAlt: 'RealEstate Icon', imgName: '부동산 정보', to: '/real-estate' },
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
        <div className="SearchInput">
          <input
            type="text"
            placeholder="아파트 이름"
            onChange={(e) => {
              setKeyword(e.target.value)
            }}
          />
          <img src={SearchUrl} alt="Search Icon" />
        </div>
        <SearchList keyword={keyword} />
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
              key={index}
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
