import React, { useEffect } from 'react'
import KakaoURL from '../../image/icon/ic_kakao.svg'

function KakaoShareButton() {
  useEffect(() => {
    createKakaoButton()
  }, [])

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init('9bdb9a68605b1a9016b54760957c90e4')
      }
      kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '아파트 랭킹 집순위 - 내 아파트 등급',
          description: '지금 당신의 아파트 등급을 확인해보세요',
          imageUrl: 'https://raw.githubusercontent.com/ro0opf/react-apart-rank/dev/client/src/image/bg_thumbnail.jpg', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 532,
          commentCount: 25,
          sharedCount: 43,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  return <img id="kakao-link-btn" src={KakaoURL} alt="kakao-share-icon" />
}
export default KakaoShareButton
