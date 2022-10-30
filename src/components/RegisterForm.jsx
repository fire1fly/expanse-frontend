import React from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAuth, selectIsAuth } from '../store/auth';

export default function RegisterForm() {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      email: '', 
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (data.payload.token) {
      console.log("token is true");
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <div className='sign__wrap'>
      <div className="sign widget">
        <div className="sign-h widget-h">Регистрация</div>
        <div className="sign-b">
          <div className="form-part">
            <label htmlFor="email" className='form-label'>E-mail</label>
            <input id="email" type="email" className='form-input'/>
          </div>
          <div className="form-part">
            <label htmlFor="name" className='form-label'>Имя и Фамилия</label>
            <input id="name" type="text" className='form-input'/>
          </div>
          <div className="form-part">
            <label htmlFor="password" className='form-label'>Пароль</label>
            <input id="password" type="password" className='form-input'/>
          </div>
          <div className="form-part">
            <label htmlFor="password_confirm" className='form-label'>Подтверждение пароля</label>
            <input id="password_confirm" type="password" className='form-input'/>
          </div>
          <div className="sign-f">
            <Link to="/login" className="sign-link">Уже есть аккаунт? Войдите</Link>
            <button className="sign-btn">Зарегестрироваться</button>
          </div>
        </div>
      </div>
    </div>
  )
}
