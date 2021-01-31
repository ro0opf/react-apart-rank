// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartPrice from '../../data/ApartPrice'
import { province } from '../../data/Static'
import ApartRankList from '../ApartRankList'
import { gAreaPrice, gAreaRank } from './AreaAPI'
import Wrapper from './AreaContents.css'
import CanvasJSReact from '../../lib/canvasjs.react'

function AreaContents() {
  let yearList = [
    { name: '1년', code: '1' },
    { name: '3년', code: '3' },
    { name: '5년', code: '5' },
  ]
  let [selectYear, setSelectYear] = useState<number>(0)
  let [apartRank, setApartRank] = useState<Apart[]>([])
  let [selectProvinceCode, setSelectProvinceCode] = useState<string>('00')
  let [apartPrice, setApartPrice] = useState<ApartPrice>()

  useEffect(() => {
    async function fetchAreaRank() {
      let pApartRank = await gAreaRank(selectProvinceCode)
      setApartRank(pApartRank)
    }

    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartPrice(pAreaPriceList)
    }

    fetchAreaRank()
    fetchAreaPrice()
  }, [selectProvinceCode])

  useEffect(() => {
    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartPrice(pAreaPriceList)
    }

    fetchAreaPrice()
  }, [selectYear])

  var CanvasJS = CanvasJSReact.CanvasJS
  var CanvasJSChart = CanvasJSReact.CanvasJSChart

  const options = {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'Units Sold VS Profit',
    },
    subtitles: [
      {
        text: 'Click Legend to Hide or Unhide Data Series',
      },
    ],
    axisX: {
      title: 'States',
    },
    axisY: {
      title: 'Units Sold',
      titleFontColor: '#6D78AD',
      lineColor: '#6D78AD',
      labelFontColor: '#6D78AD',
      tickColor: '#6D78AD',
    },
    axisY2: {
      title: 'Profit in USD',
      titleFontColor: '#51CDA0',
      lineColor: '#51CDA0',
      labelFontColor: '#51CDA0',
      tickColor: '#51CDA0',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
    },
    data: [
      {
        type: 'spline',
        name: 'Units Sold',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0 Units',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 120 },
          { x: new Date(2017, 1, 1), y: 135 },
          { x: new Date(2017, 2, 1), y: 144 },
          { x: new Date(2017, 3, 1), y: 103 },
          { x: new Date(2017, 4, 1), y: 93 },
          { x: new Date(2017, 5, 1), y: 129 },
          { x: new Date(2017, 6, 1), y: 143 },
          { x: new Date(2017, 7, 1), y: 156 },
          { x: new Date(2017, 8, 1), y: 122 },
          { x: new Date(2017, 9, 1), y: 106 },
          { x: new Date(2017, 10, 1), y: 137 },
          { x: new Date(2017, 11, 1), y: 142 },
        ],
      },
      {
        type: 'spline',
        name: 'Profit',
        axisYType: 'secondary',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '$#,##0.#',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 19034.5 },
          { x: new Date(2017, 1, 1), y: 20015 },
          { x: new Date(2017, 2, 1), y: 27342 },
          { x: new Date(2017, 3, 1), y: 20088 },
          { x: new Date(2017, 4, 1), y: 20234 },
          { x: new Date(2017, 5, 1), y: 29034 },
          { x: new Date(2017, 6, 1), y: 30487 },
          { x: new Date(2017, 7, 1), y: 32523 },
          { x: new Date(2017, 8, 1), y: 20234 },
          { x: new Date(2017, 9, 1), y: 27234 },
          { x: new Date(2017, 10, 1), y: 33548 },
          { x: new Date(2017, 11, 1), y: 32534 },
        ],
      },
    ],
  }

  return (
    <Wrapper>
      <div className="SelectGroup">
        <div className="SelectRow1">
          <select
            className="Area"
            onChange={(e) => {
              setSelectProvinceCode(e.target.value)
            }}
          >
            {province.map((value, index) => {
              return (
                <option value={value.code} key={index}>
                  {value.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="SelectRow2">
          {yearList.map((year, index) => {
            return (
              <div
                className={selectYear == index ? 'SelectedYear' : ''}
                onClick={() => {
                  setSelectYear(index)
                }}
                key={index}
              >
                {year.name}
              </div>
            )
          })}
        </div>
      </div>
      <div className="ChartTitle SubTitle">
        <span>지역구 아파트 가격 변화</span>
      </div>

      <div className="PriceChart"></div>

      <div className="ApartVolumeRank SubTitle">
        <div>현재 거래량 많은 아파트</div>
        <div>TOP 5</div>
      </div>
      <ApartRankList
        apartList={apartRank}
        circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)"
        type={1}
      />
    </Wrapper>
  )
}

export default AreaContents
