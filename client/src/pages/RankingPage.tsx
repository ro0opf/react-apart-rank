// src/pages/RankingPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import RankingContents from '../ui/ranking/RankingContents'

function RankingPage() {
  return (
    <>
      <MainHeader navIdx={1} />
      <RankingContents />
      <MainFooter />
    </>
  )
}

export default RankingPage
