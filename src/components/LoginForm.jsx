import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { fetchAuth, selectIsAuth } from '../store/auth';

export default function LoginForm() {

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
      <form className="sign widget" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-h widget-h">Авторизация</div>
        <div className="sign-b">
          <div className="form-part">
            <label htmlFor="email" className='form-label'>E-mail</label>
            <input 
              id="email" 
              type="email" 
              className='form-input'
              {...register('email', {required: 'Укажите почту'})}
            />
            <div className="form-part-msg">{errors.email?.message}</div>
          </div>
          <div className="form-part">
            <label htmlFor="password" className='form-label'>Пароль</label>
            <input 
              id="password" 
              type="password" 
              className='form-input'
              {...register('password', {required: 'Укажите пароль'})}
            />
            <div className="form-part-msg">{errors.password?.message}</div>
          </div>
          <div className="sign-f">
            <Link to="/register" className="sign-link">Нет аккаунта? Зарегестрируйтесь</Link>
            <button type="submit" className="sign-btn">Войти</button>
          </div>
        </div>
      </form>
    </div>
  )
}
