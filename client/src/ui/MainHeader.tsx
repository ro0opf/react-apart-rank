import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './MainHeader.css'
import RankingUrl from '../image/icon/btn_ranking.svg'
import AreaUrl from '../image/icon/btn_area.svg'
import CalculatorUrl from '../image/icon/btn_calculator.svg'
import CalendarUrl from '../image/icon/btn_calendar.svg'
import LogoUrl from '../image/icon/ic_logo.svg'
import SearchApart from './SearchApart'

interface iProps {
  navIdx?: number
}

function MainHeader(props: iProps) {
  let navIdx = props.navIdx
  let menus = [
    { imgSrc: AreaUrl, imgAlt: 'Area Icon', imgName: '매물 데이터', to: '/real_estate_data' },
    // { imgSrc: AreaUrl, imgAlt: 'Area Icon', imgName: '지역별 분석', to: '/area' },
    // { imgSrc: RankingUrl, imgAlt: 'Ranking Icon', imgName: '랭킹', to: '/ranking' },
    // { imgSrc: CalculatorUrl, imgAlt: 'Calculator Icon', imgName: '대출계산기', to: '/calculator' },
    // { imgSrc: CalendarUrl, imgAlt: 'Calendar Icon', imgName: '청약캘린더', to: '/calendar' },
  ]

  return (
    <Wrapper>
      <div className="Logo">
        <div className="Title">
          <Link to="/">
            <img src={LogoUrl} />
          </Link>
        </div>
      </div>
      <SearchApart />
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
              <div className={navIdx == -1 ? '' : navIdx == index ? '' : 'OnNav'}>
                <img src={menu.imgSrc} alt={menu.imgAlt} />
                <div>{menu.imgName}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="TopNavBorder" />
    </Wrapper>
  )
}

export default MainHeader
