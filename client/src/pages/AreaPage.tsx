// src/pages/AreaPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import AreaContents from '../ui/AreaContents'

function AreaPage() {
  return (
    <>
      <MainHeader navIdx={0} />
      <AreaContents />
      <MainFooter />
    </>
  )
}

export default AreaPage
