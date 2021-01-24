// src/ui/calendar/Subscription.tsx
import React from 'react'
import Wrapper from './Subscription.css'

interface iProps {
  row: {
    apartName: string
    code: number
    price: number
    areaPrice: number
  }
}

let typeList = [
  { color: '#F86565', type: 'APT특별공급', code: 0 },
  { color: '#6585F8', type: 'APT1순위', code: 1},
  { color: '#EC9657', type: 'APT2순위', code: 2},
  { color: '#9163F3', type: '오피스텔', code: 3},
  { color: '#90D44C', type: '민간임대', code: 4},
  { color: '#696969', type: '무순위/취소 후 재공급', code: 5},
]

function Subscription(props: iProps) {
  return (
    <Wrapper color={typeList[props.row.code].color}>
      <div className="Color" />
      <div className="Contents">
        <div className="NameAndType">
          <span className="Name">{props.row.apartName}</span>
          <div>
            <span className="Dot">● </span>
            <span className="Type">{typeList[props.row.code].type}</span>
          </div>
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
