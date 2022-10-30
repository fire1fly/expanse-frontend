import React, { useEffect } from 'react';

import axios from '../axios';

import { 
  Menu, 
  Content, 
  WelcomeWidget, 
  ProgressWidget, 
  CalendarWidget, 
  StaffWidget, 
  Courses 
} from '../components'

export default function Main() {

  return (
    <div className='root'>
      <Menu />
      <Content>
        <div className="main-grid">
          <WelcomeWidget />
          <ProgressWidget />
          <CalendarWidget />
          <StaffWidget />
          <Courses />
        </div>
      </Content>
    </div>
  )
}
