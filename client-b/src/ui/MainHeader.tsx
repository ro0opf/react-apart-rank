import React, { useState } from 'react'
import Wrapper from './MainHeader.css'
import MenuLogoUrl from '../image/icon/btn_menu.svg'
import RankingUrl from '../image/icon/btn_ranking.svg'
import AreaUrl from '../image/icon/btn_area.svg'
import InfoUrl from '../image/icon/btn_info.svg'
import RealEstateUrl from '../image/icon/btn_realestate.svg'

function MainHeader() {
  let [navIdx, setNavIdx] = useState(-1)
  let menus = [
    [RankingUrl, 'Ranking Icon'],
    [AreaUrl, 'Area Icon'],
    [InfoUrl, 'Info Icon'],
    [RealEstateUrl, 'RealEstate Icon'],
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
            <div
              onClick={() => {
                setNavIdx(index)
              }}
              className={navIdx == index ? 'onNav' : ''}
            >
              <img src={menu[0]} alt={menu[1]} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default MainHeader
