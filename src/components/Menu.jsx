import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../store/auth';
import { SvgSelector } from '../utils';

const nav = [
  {
    title: "Главная ",
    icon: "nav-home",
    route: ""
  },
  {
    title: "Календарь ",
    icon: "nav-calendar",
    route: "calendar"
  },
  {
    title: "Чат",
    icon: "nav-chat",
    route: "chat"
  },
  {
    title: "Обучение",
    icon: "nav-edu",
    route: "edu"
  },
  {
    title: "База знаний",
    icon: "nav-archive",
    route: "archive"
  },
]

export default function Menu() {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  }

  return (
    <div className="m">
      <div className='m-h'>
        <div className="m-datetime">
          <div className="m-datetime__value">Апрель 5, 2022 </div>
          <div className="m-datetime__value">15:00</div>
        </div>
        <div className="m-bar">
          <button className="m-bar-btn">
            <div className="m-bar-btn-indicator"></div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_395_416)">
                <path d="M14.9999 1.07129C17.438 1.07129 19.7762 2.03982 21.5002 3.76381C23.2242 5.48781 24.1927 7.82605 24.1927 10.2641C24.1927 20.4856 27.9213 22.4999 28.9284 22.4999H1.07129C2.09986 22.4999 5.807 20.4641 5.807 10.2641C5.807 7.82605 6.77553 5.48781 8.49953 3.76381C10.2235 2.03982 12.5618 1.07129 14.9999 1.07129V1.07129Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.7852 26.4209C11.9704 27.1324 12.3864 27.7623 12.9681 28.2119C13.5498 28.6616 14.2642 28.9055 14.9994 28.9055C15.7346 28.9055 16.4491 28.6616 17.0308 28.2119C17.6124 27.7623 18.0285 27.1324 18.2137 26.4209" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_395_416">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
          <button className="m-bar-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_395_406)">
              <path d="M3.21415 12.8574H5.357C5.64116 12.8574 5.91369 12.9703 6.11462 13.1712C6.31555 13.3722 6.42843 13.6447 6.42843 13.9289V19.286C6.42843 19.5702 6.31555 19.8427 6.11462 20.0436C5.91369 20.2445 5.64116 20.3574 5.357 20.3574H3.21415C2.64583 20.3574 2.10078 20.1317 1.69892 19.7298C1.29705 19.3279 1.07129 18.7829 1.07129 18.2146V15.0003C1.07129 14.432 1.29705 13.8869 1.69892 13.4851C2.10078 13.0832 2.64583 12.8574 3.21415 12.8574V12.8574Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.7859 20.3574H24.643C24.3588 20.3574 24.0863 20.2445 23.8854 20.0436C23.6844 19.8427 23.5716 19.5702 23.5716 19.286V13.9289C23.5716 13.6447 23.6844 13.3722 23.8854 13.1712C24.0863 12.9703 24.3588 12.8574 24.643 12.8574H26.7859C27.3542 12.8574 27.8992 13.0832 28.3011 13.4851C28.7029 13.8869 28.9287 14.432 28.9287 15.0003V18.2146C28.9287 18.7829 28.7029 19.3279 28.3011 19.7298C27.8992 20.1317 27.3542 20.3574 26.7859 20.3574V20.3574Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.3574 26.2503C21.4941 26.2503 22.5842 25.7987 23.3879 24.995C24.1916 24.1913 24.6431 23.1012 24.6431 21.9646V20.3574" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.678 23.5713C18.3884 23.5713 19.0697 23.8535 19.572 24.3558C20.0744 24.8582 20.3566 25.5395 20.3566 26.2499C20.3566 26.9603 20.0744 27.6416 19.572 28.1439C19.0697 28.6462 18.3884 28.9284 17.678 28.9284H14.4637C13.7533 28.9284 13.072 28.6462 12.5697 28.1439C12.0674 27.6416 11.7852 26.9603 11.7852 26.2499C11.7852 25.5395 12.0674 24.8582 12.5697 24.3558C13.072 23.8535 13.7533 23.5713 14.4637 23.5713H17.678Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.35742 12.857V10.7141C5.35742 8.1567 6.37336 5.704 8.18175 3.89562C9.99014 2.08723 12.4428 1.07129 15.0003 1.07129C17.5577 1.07129 20.0104 2.08723 21.8188 3.89562C23.6272 5.704 24.6431 8.1567 24.6431 10.7141V12.857" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.7852 8.57129V11.7856" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2139 8.57129V11.7856" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.7852 16.0713C11.7852 18.9213 18.2137 18.9213 18.2137 16.0713" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_395_406">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
          <button className="m-bar-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9997 20.3569C17.9584 20.3569 20.3569 17.9584 20.3569 14.9997C20.3569 12.0411 17.9584 9.64258 14.9997 9.64258C12.0411 9.64258 9.64258 12.0411 9.64258 14.9997C9.64258 17.9584 12.0411 20.3569 14.9997 20.3569Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 1.07129V5.357" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.14258 5.14258L8.18543 8.18543" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.07129 15H5.357" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.14258 24.8573L8.18543 21.8145" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 28.9283V24.6426" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.8573 24.8573L21.8145 21.8145" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.9283 15H24.6426" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.8573 5.14258L21.8145 8.18543" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="m__sep"></div>
      <div className="m-nav">
          {
            nav.map((item, i) => 
              <Link key={i} to={`/${item.route}` || ''} className="m-nav-item">
                <SvgSelector id={item.icon} />
                <div className="m-nav-item-label">{item.title}</div>
              </Link>
            )
          }
      </div>
      <Link to="/login" className="m-logout" onClick={onLogout}>
        <SvgSelector id="logout" />
      </Link>
    </div>
  )
}
