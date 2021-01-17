// src/pages/CalendarPage.tsx
import React from 'react'
import MainHeader from '../ui/MainHeader'
import MainFooter from '../ui/MainFooter'
import CalendarContents from '../ui/calendar/CalendarContents'

function CalendarPage() {
  return (
    <>
      <MainHeader navIdx={3} />
      <CalendarContents />
      <MainFooter />
    </>
  )
}

export default CalendarPage
