import React from 'react';
import Wrapper from './MainHeader.css';
import { ReactComponent as ReactLogo } from '../image/icon/btn_menu.svg';

function MainHeader() {
  return (
    <Wrapper>
      <ReactLogo width={32} />
      <div className="title">APART.GG</div>
    </Wrapper>
  );
}

export default MainHeader;
