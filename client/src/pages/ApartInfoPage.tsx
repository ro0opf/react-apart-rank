// src/pages/ApartInfoPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import ApartInfoContents from '../ui/ApartInfoContents'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  serial_num: string
}

function ApartInfoPage(props: RouteComponentProps<MatchParams>) {
  let serialNum = props.match.params.serial_num
  console.log(serialNum)

  return (
    <>
      <MainHeader navIdx={-1} />
      <ApartInfoContents />
      <MainFooter />
    </>
  )
}

export default ApartInfoPage
