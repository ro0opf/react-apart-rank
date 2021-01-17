// src/ui/calendar/CalendarContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './CalendarContents.css'

function CalendarContents() {
  let monthList = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  let [selectMonth, setSelectMonth] = useState<number>(0)

  return (
    <Wrapper>
      <div className="Year">
        <div>{'<'}</div>
        <div>2020년</div>
        <div>{'>'}</div>
      </div>

      <div className="Month">
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
    </Wrapper>
  )
}

export default CalendarContents
