import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRegister, selectIsAuth } from '../store/auth';

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
    const data = await dispatch(fetchRegister(values));
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
        <div className="sign-h widget-h">Регистрация</div>
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
            <label htmlFor="fullname" className='form-label'>Имя и Фамилия</label>
            <input 
              id="fullname" 
              type="text" 
              className='form-input'
              {...register('fullName', {required: 'Укажите имя и фамилию'})}
            />
            <div className="form-part-msg">{errors.fullName?.message}</div>
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
          <div className="form-part">
            <label htmlFor="password_confirm" className='form-label'>Подтверждение пароля</label>
            <input 
              id="password_confirm" 
              type="password" 
              className='form-input'
              {...register('passwordConfirm', {required: 'Подтвердите пароль'})}
            />
            <div className="form-part-msg">{errors.passwordConfirm?.message}</div>
          </div>
          <div className="sign-f">
            <Link to="/login" className="sign-link">Уже есть аккаунт? Войдите</Link>
            <button type="submit" className="sign-btn">Зарегестрироваться</button>
          </div>
        </div>
      </form>
    </div>
  )
}
