// src/ui/calendar/CalendarContents.tsx
import React, { useEffect, useState } from 'react'
import CircleBorder from '../common/CircleBorder'
import Wrapper from './CalendarContents.css'
import SubscriptionList from './SubscriptionList'

let dummyData = [
  {
    date: '12월 25일',
    data: [
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
    ],
  },
  {
    date: '12월 26일',
    data: [
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
    ],
  },
]

function CalendarContents() {
  let monthList = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  let [selectMonth, setSelectMonth] = useState<number>(0)

  let typeList = [
    { color: '#F86565', type: 'APT특별공급', code: 0, isSelect: useState<boolean>(true) },
    { color: '#6585F8', type: 'APT1순위', code: 1, isSelect: useState<boolean>(true) },
    { color: '#EC9657', type: 'APT2순위', code: 2, isSelect: useState<boolean>(true) },
    { color: '#9163F3', type: '오피스텔', code: 3, isSelect: useState<boolean>(true) },
    { color: '#90D44C', type: '민간임대', code: 4, isSelect: useState<boolean>(true) },
    { color: '#696969', type: '무순위/취소 후 재공급', code: 5, isSelect: useState<boolean>(true) },
  ]

  return (
    <Wrapper>
      <div className="Year">
        <div>{'<'}</div>
        <div>2020년</div>
        <div>{'>'}</div>
      </div>

      <div className="Months">
        {monthList.map((month, index) => {
          return (
            <div
              className={selectMonth == index ? 'SelectedMonth' : ''}
              onClick={() => {
                setSelectMonth(index)
              }}
            >
              {month}
            </div>
          )
        })}
      </div>

      <div className="Types">
        {typeList.map((type, index) => {
          return (
            <CircleBorder
              key={index}
              borderColor={type.color}
              innerColor={type.color}
              isSelect={type.isSelect[0]}
              text={type.type}
              onClick={() => {
                type.isSelect[1](!type.isSelect[0])
              }}
              fontSize="12px"
            />
          )
        })}
      </div>

      <SubscriptionList rows={dummyData} />

    </Wrapper>
  )
}

export default CalendarContents
