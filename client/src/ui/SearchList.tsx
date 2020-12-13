import React, { useRef, useState } from 'react'
import Wrapper from './SearchList.css'

interface iProps {
  keyword?: string
}

function SearchList(props: iProps) {
  return (
    <Wrapper>
      <div>{props.keyword}</div>
    </Wrapper>
  )
}

export default SearchList
