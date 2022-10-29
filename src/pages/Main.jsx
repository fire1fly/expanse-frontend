import React from 'react';

import { Content, WelcomeWidget, ProgressWidget } from '../components'

export default function Main() {
  return (
    <Content>
      <div className="main-grid">
        <WelcomeWidget />
        <ProgressWidget />
      </div>
    </Content>
  )
}
