import React from 'react'

export default function WelcomeWidget() {
  return (
    <div className="wlc widget">
      <div className="wlc-h widget-h">
        <div className="wlc-title">Добрый день, <span className='name'>Данил</span>!</div>
      </div>
      <div className="wlc-b">
        <div className="wlc-label">Напоминаем:</div>
        <ul className="wlc-list">
          <li>У вас обновилось кол-во баллов. Для ознакомления перейдите в раздел “обучения”.</li>
          <li>Для завершения блока “Корпоративная этика”, у Вас остался 1 день. </li>
          <li>Для завершения блока “Корпоративная этика”, у Вас остался 1 день. </li>
          <li>Для завершения блока “Корпоративная этика”, у Вас остался 1 день. </li>
          <li>Для завершения блока “Корпоративная этика”, у Вас остался 1 день. </li>
        </ul>
      </div>
    </div>
  )
}
