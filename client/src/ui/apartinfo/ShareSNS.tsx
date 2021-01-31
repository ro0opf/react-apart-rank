// src/ui/apartinfo/ShareSNS.tsx
import React from 'react'
import Wrapper from './ShareSNS.css'
import InstagramURL from '../../image/icon/ic_instagram.svg'
import FacebookURL from '../../image/icon/ic_facebook.svg'
import TwitterURL from '../../image/icon/ic_twitter.svg'

function test() {
  window.open('http://www.facebook.com/sharer.php?u=http://apart.gq')
}

function ShareSNS() {
  return (
    <Wrapper>
      <meta property="og:url" content="https://www.your-domain.com/your-page.html" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Your Website Title" />
      <meta property="og:description" content="Your description" />
      <meta property="og:image" content="https://www.your-domain.com/path/image.jpg" />
      
      <div className="Share">
        <div>SNS 공유하기</div>
        <div className="ShareImg">
          <img src={TwitterURL} />
          <img src={FacebookURL} onClick={test} />
          <img src={InstagramURL} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ShareSNS
