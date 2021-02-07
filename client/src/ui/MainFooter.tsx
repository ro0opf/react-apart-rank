import React from 'react'
import Wrapper from './MainFooter.css'

function MainFooter() {
  return (
    <Wrapper>
      <div
        className="MobileToPc"
        onClick={() => {
          alert('개발중...')
        }}
      >
        PC버전 보기
      </div>
      <ul>
        <li>
          <div>About LifeInValley</div>
        </li>
        <li className="Seperator">|</li>
        <li>
          <div>도움말</div>
        </li>
        <li className="Seperator">|</li>
        <li>
          <div>문의/피드백</div>
        </li>
      </ul>
      <div className="copyright">
        <p>
          <span>Copyright</span>©
          <a href="https://ro0opf.github.io/" target="_blank" rel="noopener noreferrer">
            LifeInValley Corp.
          </a>
          <span> All Rights Reserved.</span>
        </p>
      </div>
    </Wrapper>
  )
}

export default MainFooter
