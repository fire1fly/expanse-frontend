import React from 'react'

export default function CalendarWidget() {
  return (
    <div className="calwid widget">
      <div className="calwid-h widget-h">
        <div className='calwid-h-top'>
          <div className="calwid-title">Апрель 2022</div>
          <div className="calwid-h-bar">
            <button className="calwid-h-arrow">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.38453 0.449124C9.87269 0.93728 9.87269 1.72874 9.38453 2.21689L3.60175 7.99967L9.38453 13.7825C9.87269 14.2706 9.87269 15.0621 9.38453 15.5502C8.89638 16.0384 8.10492 16.0384 7.61677 15.5502L0.950101 8.88356C0.461946 8.3954 0.461946 7.60395 0.950101 7.11579L7.61677 0.449124C8.10492 -0.039031 8.89638 -0.039031 9.38453 0.449124Z" fill="white"/>
              </svg>
            </button>
            <button className="calwid-h-arrow">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.616117 0.449124C1.10427 -0.039031 1.89573 -0.039031 2.38388 0.449124L9.05055 7.11579C9.53871 7.60395 9.53871 8.3954 9.05055 8.88356L2.38388 15.5502C1.89573 16.0384 1.10427 16.0384 0.616117 15.5502C0.127961 15.0621 0.127961 14.2706 0.616117 13.7825L6.3989 7.99967L0.616117 2.21689C0.127961 1.72874 0.127961 0.93728 0.616117 0.449124Z" fill="white"/>
            </svg>
            </button>
          </div>
        </div>
        <div className="calwid-h-bot">
          <div className="calwid-day">
            <div className="weekday">Пн.</div>
            <div className="day">24</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Вт.</div>
            <div className="day">25</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Ср.</div>
            <div className="day">26</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Чт.</div>
            <div className="day">27</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Пт.</div>
            <div className="day">28</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Сб.</div>
            <div className="day">29</div>
          </div>
          <div className="calwid-day">
            <div className="weekday">Вс.</div>
            <div className="day">30</div>
          </div>
        </div>
      </div>
      <div className="calwid-b">
        <div className="calwid-list">
          <div className="calwid-event">
            09:00 • Митинг с отделом frontend разработки по вопросу стека на фронте текущего проекта
          </div>
          <div className="calwid-event">
            14:00 • Созвон с Сергеем из аналитики. Бизнес логика виджетов, функционал и сроки внедрения
          </div>

        </div>
      </div>
    </div>
  )
}
