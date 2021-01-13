// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import Apart from '../../data/Apart'
import ApartRankList from '../ApartRankList'
import Wrapper from './InputAndInputTitle.css'

interface iProps {
  title: string
  inputName: string
  setInputValue: Function
}

function InputAndInputTitle(props: iProps) {
  return (
    <Wrapper>
      <div className="InputAndTitle">
        <div className="Title">
          <span>{props.title}</span>
        </div>
        <div className="Input">
          <input
            type="number"
            onChange={(e) => {
              props.setInputValue(e.target.value)
            }}
          ></input>
          <span>{props.inputName}</span>
        </div>
        <div className="Border"></div>
      </div>
    </Wrapper>
  )
}

export default InputAndInputTitle