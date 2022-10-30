import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAuthMe, selectIsAuth } from './store/auth';
import './assets/styles/styles.sass';

import { LoginForm, RegisterForm } from './components'
import { Main, Calendar, Chat, Education, Archive } from './pages'

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className='root'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
