// src/ui/area/AreaContents.tsx
import React, { useEffect, useState } from 'react'
import { province } from '../../data/Static'
import ApartRankList from '../ApartRankList'
import { gAreaPrice, gAreaRank } from './AreaAPI'
import Wrapper from './AreaContents.css'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import ApartVariance from '../../data/ApartPrice'
import { Apart } from '../../data/Apart'

function generateChartData(apartVariance: ApartVariance) {
  let chartData = []
  for (let i = 0; i < apartVariance.price_change.length; i++) {
    let newDate = new Date(
      parseInt(apartVariance.price_change[i].trans_yymm.substr(0, 4)),
      parseInt(apartVariance.price_change[i].trans_yymm.substr(4, 2)),
    )
    let price = parseFloat(apartVariance.price_change[i].trans_price)
    let volume = parseFloat(apartVariance.volume_change[i].trans_amount)

    chartData.push({
      date: newDate,
      price: price,
      volume: volume,
    })
  }
  return chartData
}

function makeChart(apartVariance: ApartVariance | null | undefined) {
  if (apartVariance == undefined) {
    return
  }

  am4core.useTheme(am4themes_animated)
  let chart = am4core.create('chartdiv', am4charts.XYChart)

  chart.colors.step = 2
  chart.fontSize = 12
  chart.paddingLeft = 0
  chart.marginLeft = 0
  chart.paddingRight = 0
  chart.marginRight = 0
  chart.data = generateChartData(apartVariance)

  let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
  dateAxis.renderer.minGridDistance = 40

  function createAxisAndSeries(field: string, name: string, opposite: boolean, bullet: string) {
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
        rectangle.stroke = am4core.color('#6383F5')
        rectangle.fill = am4core.color('#6383F5')
        rectangle.strokeWidth = 2
        rectangle.width = 10
        rectangle.height = 10

        if (series.tooltip != undefined) {
          series.tooltip.getFillFromObject = false
          series.tooltip.background.fill = am4core.color('#6383F5')
          series.tooltip.fontSize = 12
          series.stroke = am4core.color('#6383F5')
        }
        break
      case 'circle':
        let cBullet = series.bullets.push(new am4charts.CircleBullet())
        cBullet.circle.stroke = am4core.color('#EE5829')
        cBullet.circle.fill = am4core.color('#EE5829')
        cBullet.circle.strokeWidth = 2
        if (series.tooltip != undefined) {
          series.tooltip.getFillFromObject = false
          series.tooltip.background.fill = am4core.color('#EE5829')
          series.tooltip.fontSize = 12
          series.stroke = am4core.color('#EE5829')
        }
        break
      default:
        break
    }

    valueAxis.renderer.line.strokeOpacity = 1
    valueAxis.renderer.line.strokeWidth = 2
    valueAxis.renderer.line.stroke = series.stroke
    valueAxis.renderer.labels.template.fill = series.stroke
    valueAxis.renderer.opposite = opposite
  }

  createAxisAndSeries('price', '가격 변화량', false, 'circle')
  // createAxisAndSeries('views', 'Views', true, 'triangle')
  createAxisAndSeries('volume', '거래량 변화량', true, 'rectangle')

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
  let [apartVariance, setApartVariance] = useState<ApartVariance>()

  useEffect(() => {
    async function fetchAreaRank() {
      let pApartRank = await gAreaRank(selectProvinceCode)
      setApartRank(pApartRank)
    }

    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartVariance(pAreaPriceList)
    }

    fetchAreaRank()
    fetchAreaPrice()
  }, [selectProvinceCode])

  useEffect(() => {
    async function fetchAreaPrice() {
      let pAreaPriceList = await gAreaPrice(selectProvinceCode, yearList[selectYear].code)
      setApartVariance(pAreaPriceList)
    }

    fetchAreaPrice()
  }, [selectYear])

  useEffect(() => {
    makeChart(apartVariance)
  }, [apartVariance])

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
