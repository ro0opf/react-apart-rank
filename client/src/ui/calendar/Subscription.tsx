// src/ui/calendar/Subscription.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './Subscription.css'

interface iProps {
  row: {
    apartName: string
    code: number
    price: number
    areaPrice: number
  }
}

function Subscription(props: iProps) {
  return (
    <Wrapper>
      <div className="Color" />
      <div className="Contents">
        <div className="NameAndType">
          <span>{props.row.apartName}</span>
          <span>{props.row.code}</span>
        </div>

        <div className="Price">
          <span>분양가(평당)</span>

          <span>{props.row.price}원</span>
        </div>

        <div className="Price">
          <span>지역구(평당)</span>

          <span>{props.row.areaPrice}원</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Subscription
