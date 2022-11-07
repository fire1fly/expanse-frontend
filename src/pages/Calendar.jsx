import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../store/auth';

import { 
  Menu, 
  Content
} from '../components';

export default function Main() {

  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return (
    <div className='root'>
      <Menu />
      <Content>
        <h1>Календарь</h1>
      </Content>
    </div>
  )
}
