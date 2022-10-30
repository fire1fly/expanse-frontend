import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <div className='sign__wrap'>
      <div className="sign widget">
        <div className="sign-h widget-h">Авторизация</div>
        <div className="sign-b">
          <div className="form-part">
            <label htmlFor="email" className='form-label'>E-mail</label>
            <input id="email" type="email" className='form-input'/>
          </div>
          <div className="form-part">
            <label htmlFor="password" className='form-label'>Пароль</label>
            <input id="password" type="password" className='form-input'/>
          </div>
          <div className="sign-f">
            <Link to="/register" className="sign-link">Нет аккаунта? Зарегестрируйтесь</Link>
            <button className="sign-btn">Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}
