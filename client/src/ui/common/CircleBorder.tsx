// src/ui/common/CircleBorder.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './CircleBorder.css'

interface iProps {
  borderColor: string
  innerColor: string
  isSelect: boolean
  text: string
  fontSize: string
  onClick: () => void
}

function CircleBorder(props: iProps) {
  return (
    <Wrapper
      borderColor={props.borderColor}
      innerColor={props.innerColor}
      isSelect={props.isSelect}
      fontSize={props.fontSize}
      onClick={props.onClick}
    >
      <div>{props.text}</div>
    </Wrapper>
  )
}

export default CircleBorder
