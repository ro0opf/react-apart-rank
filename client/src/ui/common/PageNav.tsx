// src/ui/common/PageNav.tsx
import React from 'react'
import Wrapper from './PageNav.css'
import LeftArrowUrl from '../../image/icon/ic_left_arrow.svg'
import LeftDoubleArrowUrl from '../../image/icon/ic_left_double_arrow.svg'
import RightArrowUrl from '../../image/icon/ic_right_arrow.svg'
import RightDoubleArrowUrl from '../../image/icon/ic_right_double_arrow.svg'

function PageNav() {
  return (
    <Wrapper>
      <img src={LeftDoubleArrowUrl} />
      <img className="Left" src={LeftArrowUrl} />
      <ul>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((value, index) => {
          return <li>{value}</li>
        })}
      </ul>
      <img className="Right" src={RightArrowUrl} />
      <img src={RightDoubleArrowUrl} />
    </Wrapper>
  )
}

export default PageNav
