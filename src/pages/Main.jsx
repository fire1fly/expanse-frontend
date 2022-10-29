import React from 'react';

import { Content, WelcomeWidget, ProgressWidget, CalendarWidget } from '../components'

export default function Main() {
  return (
    <Content>
      <div className="main-grid">
        <WelcomeWidget />
        <ProgressWidget />
        <CalendarWidget />
      </div>
    </Content>
  )
}
