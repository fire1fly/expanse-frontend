import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchAuthMe } from './store/auth';
import './assets/styles/styles.sass';

import { LoginForm, RegisterForm } from './components'
import { Main, Calendar, Chat, Education, Archive } from './pages'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/edu" element={<Education />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
