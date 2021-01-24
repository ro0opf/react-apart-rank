// src/pages/ApartInfoPage.tsx
import React, { useEffect } from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import ApartInfoContents from '../ui/apartinfo/ApartInfoContents'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  serial_num: string
  pr_cd: string
  ct_cd: string
  dong_cd: string
  addr_cd: string
}

function ApartInfoPage(props: RouteComponentProps<MatchParams>) {
  let serial_num = props.match.params.serial_num
  let pr_cd = props.match.params.pr_cd
  let ct_cd = props.match.params.ct_cd
  let dong_cd = props.match.params.dong_cd
  let addr_cd = props.match.params.addr_cd

  return (
    <>
      <MainHeader navIdx={-1} />
      <ApartInfoContents serial_num={serial_num} pr_cd={pr_cd} ct_cd={ct_cd} dong_cd={dong_cd} addr_cd={addr_cd} />
      <MainFooter />
    </>
  )
}

export default ApartInfoPage
