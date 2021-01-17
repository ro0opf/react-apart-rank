// src/ui/calculator/CalculatorContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './CalculatorContents.css'
import InputAndInputTitle from './InputAndInputTitle'

function CalculatorContents() {
  let typeList = [{ type: '원리금균등' }, { type: '원금균등' }, { type: '만기일시' }]
  let [typeIndex, setTypeIndex] = useState(0)
  let [totalInterestCost, setTotalInterestCost] = useState(0)
  let [loanCost, setLoanCost] = useState<number>()

  return (
    <Wrapper>
      <InputAndInputTitle inputName="만원" title="대출금액" setInputValue={setLoanCost} />
      <InputAndInputTitle inputName="%" title="연금리" setInputValue={setLoanCost} />
      <InputAndInputTitle inputName="개월" title="대출기간" setInputValue={setLoanCost} />
      <div className="Type">
        <div className="Title">
          <span>상환방법</span>
        </div>
        <ul className="TypeList">
          {typeList.map((type, index) => {
            return (
              <li className={typeIndex == index ? 'Clicked' : ''} onClick={() => setTypeIndex(index)}>
                {type.type}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="Result">
        <div className="Title">
          <span>총 대출이자</span>
        </div>

        <div className="Cost">
          <span>{loanCost + '원'}</span>
        </div>
      </div>

      <div className="Monthly">
        <div className="Title">
          <span>월 상환금액</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default CalculatorContents
