// src/ui/calendar/SubscriptionList.tsx
import React from 'react'
import Subscription from './Subscription'
import Wrapper from './SubscriptionList.css'
import Calendar from '../../data/Calendar'

interface iProps {
  rows: {
    date: string
    data: Calendar[]
  }[]
  type: {
    color: string
    type: string
    code: number
    isSelect: [boolean, Function]
  }[]
}

function parseDate(date: string) {
  return date.substr(4, 2) + '월 ' + date.substr(6) + '일'
}

function SubscriptionList(props: iProps) {
  return (
    <Wrapper>
      {props.rows.map((value, index) => {
        return (
          <div key={index} className="SubsParent">
            <div className="SubsData">
              <span className="Date">{parseDate(value.date)}</span>
              <div className="Data">
                {value.data.map((value, index) => {
                  if (props.type[parseInt(value.rcept_se) - 1].isSelect[0]) {
                    return <Subscription key={index} row={value} />
                  }
                })}
              </div>
            </div>
            <div className="Dotted" />
          </div>
        )
      })}
    </Wrapper>
  )
}

export default SubscriptionList
