// src/ui/calculator/CalculatorContents.tsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import env from '../../data/Env'
import Interest from '../../data/Interest'
import Wrapper from './CalculatorContents.css'
import InputAndInputTitle from './InputAndInputTitle'

async function fetchInterest(type: string, principal: number, interest: number, period: number) {
  try {
    let response = await axios.get<Interest>(
      'https://api.apart-back.gq:9999/calculator?type=' +
        type +
        '&principal=' +
        principal +
        '&interest=' +
        interest +
        '&period=' +
        period,
      {
        timeout: env.timeout,
      },
    )
    return response.data
  } catch (error) {
    console.log(error)
    return {
      total_loan_interest: 0,
      total_repayment: 0,
      loanDetail: [
        {
          idx: 0,
          principal_payment: 0,
          loan_interest: 0,
          monthly_payment: 0,
        },
      ],
    }
  }
}

function CalculatorContents() {
  let typeList = [
    { type: '원리금균등', code: '01' },
    { type: '원금균등', code: '02' },
    { type: '만기일시', code: '03' },
  ]
  let [typeIndex, setTypeIndex] = useState(0)
  let [totalInterestCost, setTotalInterestCost] = useState(0)
  let [principal, setPrincipal] = useState<number>(0)
  let [interest, setInterest] = useState<number>(0)
  let [period, setPeriod] = useState<number>(0)

  useEffect(() => {
    async function fetchData() {
      let pInterest: Interest = await fetchInterest(typeList[typeIndex].code, principal, interest, period)

      setTotalInterestCost(pInterest.total_loan_interest)
    }

    fetchData()
  }, [principal, interest, period, typeIndex])
  return (
    <Wrapper>
      <InputAndInputTitle inputName="만원" title="대출금액" setInputValue={setPrincipal} />
      <InputAndInputTitle inputName="%" title="연금리" setInputValue={setInterest} />
      <InputAndInputTitle inputName="개월" title="대출기간" setInputValue={setPeriod} />
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
          <span>{totalInterestCost + '원'}</span>
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
