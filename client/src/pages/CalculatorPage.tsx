// src/pages/CalculatorPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import CalculatorContents from '../ui/calculator/CalculatorContents'

function CalculatorPage() {
  return (
    <>
      <MainHeader navIdx={2} />
      <CalculatorContents />
      <MainFooter />
    </>
  )
}

export default CalculatorPage
