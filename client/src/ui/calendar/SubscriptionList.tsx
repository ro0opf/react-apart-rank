// src/ui/calendar/SubscriptionList.tsx
import React, { useEffect, useState } from 'react'
import Subscription from './Subscription'
import Wrapper from './SubscriptionList.css'

interface iProps {
  rows: {
    date: string
    data: {
      apartName: string
      code: number
      price: number
      areaPrice: number
    }[]
  }[]
}

function SubscriptionList(props: iProps) {
  return (
    <Wrapper>
      {props.rows.map((value, index) => {
        return (
          <>
            <div className="SubsData">
              <span className="Date">{value.date}</span>
              <div className="Data">
                {value.data.map((value, index) => {
                  return <Subscription row={value} />
                })}
              </div>
            </div>
            <div className="Dotted" />
          </>
        )
      })}
    </Wrapper>
  )
}

export default SubscriptionList
