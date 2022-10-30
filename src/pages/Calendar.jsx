import React from 'react';

import { 
  Menu, 
  Content
} from '../components';

export default function Main() {
  return (
    <div className='root'>
      <Menu />
      <Content>
        <h1>Календарь</h1>
      </Content>
    </div>
  )
}