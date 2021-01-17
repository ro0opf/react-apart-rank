// src/ui/apartinfo/ShareSNS.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './ShareSNS.css'
import InstagramURL from '../../image/icon/ic_instagram.svg'
import FacebookURL from '../../image/icon/ic_facebook.svg'
import TwitterURL from '../../image/icon/ic_twitter.svg'

function ShareSNS() {
  return (
    <Wrapper>
      <div className="Share">
        <div>SNS 공유하기</div>
        <div className="ShareImg">
          <img src={TwitterURL} />
          <img src={FacebookURL} />
          <img src={InstagramURL} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ShareSNS
