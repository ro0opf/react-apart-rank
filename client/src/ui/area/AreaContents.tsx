// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import Apart from '../../data/Apart'
import ApartPrice from '../../data/ApartPrice'
import { province } from '../../data/Static'
import ApartRankList from '../ApartRankList'
import { gAreaPrice, gAreaRank } from './AreaAPI'
import Wrapper from './AreaContents.css'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

function generateChartData() {
  let chartData = []
  let firstDate = new Date()
  firstDate.setDate(firstDate.getDate() - 100)
  firstDate.setHours(0, 0, 0, 0)

  let visits = 1600
  let hits = 2900
  let views = 8700

  for (var i = 0; i < 15; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using chart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    let newDate = new Date(firstDate)
    newDate.setDate(newDate.getDate() + i)

    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
    hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
    views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)

    chartData.push({
      date: newDate,
      visits: visits,
      hits: hits,
      views: views,
    })
  }
  return chartData
}

function makeChart() {
  am4core.useTheme(am4themes_animated)
  let chart = am4core.create('chartdiv', am4charts.XYChart)

  chart.colors.step = 2
  chart.data = generateChartData()

  let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
  dateAxis.renderer.minGridDistance = 50

  function createAxisAndSeries(field: any, name: any, opposite: any, bullet: any) {
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    if (chart.yAxes.indexOf(valueAxis) != 0) {
      valueAxis.syncWithAxis = chart.yAxes.getIndex(0) as am4charts.ValueAxis
    }

    let series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = field
    series.dataFields.dateX = 'date'
    series.strokeWidth = 2
    series.yAxis = valueAxis
    series.name = name
    series.tooltipText = '{name}: [bold]{valueY}[/]'
    series.tensionX = 0.8
    series.showOnInit = true

    let interfaceColors = new am4core.InterfaceColorSet()

    switch (bullet) {
      case 'triangle':
        let tBullet = series.bullets.push(new am4charts.Bullet())
        tBullet.width = 12
        tBullet.height = 12
        tBullet.horizontalCenter = 'middle'
        tBullet.verticalCenter = 'middle'

        let triangle = tBullet.createChild(am4core.Triangle)
        triangle.stroke = interfaceColors.getFor('background')
        triangle.strokeWidth = 2
        triangle.direction = 'top'
        triangle.width = 12
        triangle.height = 12
        break
      case 'rectangle':
        let rBullet = series.bullets.push(new am4charts.Bullet())
        rBullet.width = 10
        rBullet.height = 10
        rBullet.horizontalCenter = 'middle'
        rBullet.verticalCenter = 'middle'

        let rectangle = rBullet.createChild(am4core.Rectangle)
        rectangle.stroke = interfaceColors.getFor('background')
        rectangle.strokeWidth = 2
        rectangle.width = 10
        rectangle.height = 10
        break
      default:
        let cBullet = series.bullets.push(new am4charts.CircleBullet())
        cBullet.circle.stroke = interfaceColors.getFor('background')
        cBullet.circle.strokeWidth = 2
        if (series.tooltip != undefined) {
          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color('#CEB1BE')
        }
        break
    }

    valueAxis.renderer.line.strokeOpacity = 1
    valueAxis.renderer.line.strokeWidth = 2
    valueAxis.renderer.line.stroke = series.stroke
    valueAxis.renderer.labels.template.fill = series.stroke
    valueAxis.renderer.opposite = opposite
  }

  createAxisAndSeries('visits', 'Visits', false, 'circle')
  // createAxisAndSeries('views', 'Views', true, 'triangle')
  createAxisAndSeries('hits', 'Hits', true, 'rectangle')

  chart.legend = new am4charts.Legend()
  chart.cursor = new am4charts.XYCursor()
}

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

  makeChart()

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

      <div className="PriceChart">
        <div id="chartdiv"></div>
      </div>

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
