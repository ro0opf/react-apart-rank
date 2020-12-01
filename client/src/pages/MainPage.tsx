// src/pages/MainPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainContents from '../ui/MainContents'
import MainFooter from '../ui/MainFooter'

function MainPage() {
  return (
    <>
      <MainHeader navIdx={-1}/>
      <MainContents />
      <MainFooter />
    </>
  )
}

export default MainPage
