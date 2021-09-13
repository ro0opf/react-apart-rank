// src/pages/RealEstateDataPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import RealEstateDataContents from '../ui/real_estate_data/RealEstateDataContents'

function RealEstateDataPage() {
  return (
    <>
      <MainHeader navIdx={0} />
      <RealEstateDataContents />
      <MainFooter />
    </>
  )
}

export default RealEstateDataPage
