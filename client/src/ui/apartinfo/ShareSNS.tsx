// src/ui/apartinfo/ShareSNS.tsx
import React from 'react'
import Wrapper from './ShareSNS.css'
import InstagramURL from '../../image/icon/ic_instagram.svg'
import FacebookURL from '../../image/icon/ic_facebook.svg'
import TwitterURL from '../../image/icon/ic_twitter.svg'
import ApartInfo from '../../data/ApartInfo'

interface iProps {
  apartInfo?: ApartInfo
}

function shareFacebook() {
  window.open('http://www.facebook.com/sharer.php?u=http://apart.gq')
}

function shareTwitter(apartInfo?: ApartInfo) {
  window.open(
    'https://twitter.com/intent/tweet?text=내 아파트 등급은?%0a──────────────────%0a' +
      apartInfo?.my_apt_dtl.apt_name +
      ' 아파트의 등급은 ' +
      apartInfo?.wide_my_tier +
      '입니다.%0a' +
      '&url=https://apart.gq',
  )
}

function shareInstagram() {}

function ShareSNS(props: iProps) {
  return (
    <Wrapper>
      <div className="Share">
        <div>SNS 공유하기</div>
        <div className="ShareImg">
          <img
            src={TwitterURL}
            onClick={() => {
              shareTwitter(props.apartInfo)
            }}
          />
          <img src={FacebookURL} onClick={shareFacebook} />
          <img src={InstagramURL} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ShareSNS
