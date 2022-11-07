import React from 'react';
import { useSelector } from 'react-redux';

export default function WelcomeWidget() {

  const user = useSelector((state) => state.auth.data)

  return (
    <div className="wlc widget">
      <div className="wlc-h widget-h">
        <div className="wlc-title">Добрый день, <span className='name'>
          {user?.fullName.split(" ")[0]}
        </span>!</div>
      </div>
      <div className="wlc-b">
        <div className="wlc-label">Напоминаем:</div>
        <ul className="wlc-list">
          <li>У вас обновилось кол-во баллов. Для ознакомления перейдите в раздел “обучения”.</li>
          <li>Для завершения блока “Корпоративная этика”, у Вас остался 1 день. </li>
        </ul>
      </div>
    </div>
  )
}
