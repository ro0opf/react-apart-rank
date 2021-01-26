// src/ui/calculator/MonthlyInterest.tsx
import React, { useEffect, useState } from 'react'
import Parse from '../../common/Parse'
import Wrapper from './MonthlyInterest.css'
import priceToKor from '../../common/Parse';

interface iProps {
  monthlyInterest: {
    idx: number
    principal_payment: number
    loan_interest: number
    monthly_payment: number
  }
}


function MonthlyInterest(props: iProps) {
  return (
    <Wrapper>
      <div className="InterestAndPrincipal">
        <div className="Round">{props.monthlyInterest.idx + '회차'}</div>
        <div className="Interest">{'원금 ' + Parse.priceToKor(props.monthlyInterest.principal_payment) + '원'}</div>
        <div className="Principal">{'이자 ' + Parse.priceToKor(props.monthlyInterest.loan_interest) + '원'}</div>
      </div>

      <div className="TotalRepayment">{Parse.priceToKor(props.monthlyInterest.monthly_payment) + '원'}</div>
    </Wrapper>
  )
}

export default MonthlyInterest
