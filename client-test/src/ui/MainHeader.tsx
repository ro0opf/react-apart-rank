import React from 'react';
import Wrapper from './MainHeader.css';
import MenuLogoUrl, { ReactComponent as MenuLogo } from '../image/icon/btn_menu.svg';

function MainHeader() {
  return (
    <Wrapper>
      <div className="Logo">
        <img src={MenuLogoUrl} alt="Love Icon" />
        <div className="Title">
          <div>APART.GG</div>
        </div>
      </div>

      <div className="SearchApart">
        <input type="text" placeholder="아파트 이름" />
      </div>
      <div className="TopNav">
        <div>
          지역별 분석
        </div>
        <div>
          랭킹
        </div>
        <div>
          분양정보
        </div>
        <div>
          부동산 정보
        </div>
      </div>
    </Wrapper>
  );
}

export default MainHeader;
