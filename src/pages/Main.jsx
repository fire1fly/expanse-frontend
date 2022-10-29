import React from 'react';

import { Content, WelcomeWidget, ProgressWidget, CalendarWidget, StaffWidget, Courses } from '../components'

export default function Main() {
  return (
    <Content>
      <div className="main-grid">
        <WelcomeWidget />
        <ProgressWidget />
        <CalendarWidget />
        <StaffWidget />
        <Courses />
      </div>
    </Content>
  )
}
