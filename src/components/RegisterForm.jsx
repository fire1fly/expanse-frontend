import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
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
