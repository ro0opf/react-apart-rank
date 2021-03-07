// src/ui/common/PageNav.tsx
import React from 'react'
import Wrapper from './PageNav.css'
import LeftArrowUrl from '../../image/icon/ic_left_arrow.svg'
import LeftDoubleArrowUrl from '../../image/icon/ic_left_double_arrow.svg'
import RightArrowUrl from '../../image/icon/ic_right_arrow.svg'
import RightDoubleArrowUrl from '../../image/icon/ic_right_double_arrow.svg'

interface iProps {
  pageNo: number
  max_page: number
  setPageNo: Function
}

function PageNav(props: iProps) {
  return (
    <Wrapper>
      <img
        src={LeftDoubleArrowUrl}
        onClick={() => {
          props.setPageNo(1)
        }}
      />
      <img
        className="Left"
        src={LeftArrowUrl}
        onClick={() => {
          if (props.pageNo != 1) {
            props.setPageNo(props.pageNo - 1)
          }
        }}
      />
      <ul>
        {Array.from({ length: props.max_page }, (_, i) => i + 1).map((value, index) => {
          return (
            <li
              className={index == props.pageNo - 1 ? 'Selected' : ''}
              onClick={() => {
                props.setPageNo(index + 1)
              }}
              key={index}
            >
              {value}
            </li>
          )
        })}
      </ul>
      <img
        className="Right"
        src={RightArrowUrl}
        onClick={() => {
          if (props.pageNo != 10) {
            props.setPageNo(props.pageNo + 1)
          }
        }}
      />
      <img
        src={RightDoubleArrowUrl}
        onClick={() => {
          props.setPageNo(props.max_page)
        }}
      />
    </Wrapper>
  )
}

export default PageNav
