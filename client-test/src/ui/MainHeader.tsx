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
        <input type="text" />
      </div>
      <div className="TopNav">asdasd</div>
    </Wrapper>
  );
}

export default MainHeader;
