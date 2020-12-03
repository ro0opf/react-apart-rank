// src/ui/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './AreaContents.css'

function AreaContents() {
  return (
    <Wrapper>
      <div className="Combo">
        <div className="ComboRow1">
          <div className="Quarter">최근 3개월 기준</div>
          <div className="Annual">최근 1년 기준</div>
        </div>
        <div className="ComboRow2">
          <select className="Area">
            <option value="00" defaultChecked>전국</option>
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">인천</option>
            <option value="04">전주</option>
          </select>
          <div>전체금액</div>
          <div>모든 평수</div>
          <div>금액순</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AreaContents
