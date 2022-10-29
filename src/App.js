import React from 'react'
import axios from 'axios';

import './assets/styles/styles.sass'

import { Menu } from './components'
import { Main } from './pages'

function App() {

  return (
    <div className='root'>
      <Menu />
      <Main />
    </div>
  );
}

export default App;
