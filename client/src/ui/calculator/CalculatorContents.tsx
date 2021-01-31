// src/ui/calculator/CalculatorContents.tsx
import React, { useEffect, useState } from 'react'
import Parse from '../../common/Parse'
import Interest from '../../data/Interest'
import { gInterest } from './CalculatorAPI'
import Wrapper from './CalculatorContents.css'
import InputAndInputTitle from './InputAndInputTitle'
import MonthlyInterest from './MonthlyInterest'

function CalculatorContents() {
  let typeList = [
    { type: '원리금균등', code: '01' },
    { type: '원금균등', code: '02' },
    { type: '만기일시', code: '03' },
  ]
  let [typeIndex, setTypeIndex] = useState(0)
  let [totalInterestCost, setTotalInterestCost] = useState(0)
  let [principal, setPrincipal] = useState<number>(0)
  let [interestCost, setInterestCost] = useState<number>(0)
  let [period, setPeriod] = useState<number>(0)
  let [interest, setInterest] = useState<Interest>()

  useEffect(() => {
    async function fetchData() {
      let pInterest: Interest = await gInterest(typeList[typeIndex].code, principal, interestCost, period)

      setInterest(pInterest)
      setTotalInterestCost(pInterest.total_loan_interest)
    }

    fetchData()
  }, [principal, interestCost, period, typeIndex])
  return (
    <Wrapper>
      <InputAndInputTitle inputName="만원" title="대출금액" setInputValue={setPrincipal} />
      <InputAndInputTitle inputName="%" title="연금리" setInputValue={setInterestCost} />
      <InputAndInputTitle inputName="개월" title="대출기간" setInputValue={setPeriod} />
      <div className="Type">
        <div className="Title">
          <span>상환방법</span>
        </div>
        <ul className="TypeList">
          {typeList.map((type, index) => {
            return (
              <li key={index} className={typeIndex == index ? 'Clicked' : ''} onClick={() => setTypeIndex(index)}>
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
          <span>{Parse.priceToKor(totalInterestCost) + '원'}</span>
        </div>
      </div>

      <div className="Monthly">
        <div className="Title">
          <span>월 상환금액</span>
        </div>

        {interest?.loanDetail.map((value, index) => {
          return <MonthlyInterest key={index} monthlyInterest={value} />
        })}
      </div>
    </Wrapper>
  )
}

export default CalculatorContents
