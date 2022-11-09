import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from '../utils/date';

import { fetchNotifications } from '../store/notifications';

export default function Notifications({onUnmount}) {

  const dispatch = useDispatch();
  const popup = useRef(null);

  const { data, status } = useSelector(state => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
    setTimeout(() => {
      popup.current.classList.add("active");
    }, 0);
    document.addEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    if(!e.target.closest(".nots") && !e.target.closest(".nots-btn")) {
      document.removeEventListener("click", handleOutsideClick);
      closePopup();
    }
  }

  const closePopup = () => {
    popup.current.classList.remove("active");
      setTimeout(() => {
        onUnmount(false);
      }, 200);
  }

  const getDateLabel = (date) => {
    const today = moment().format("DD-MM-YYYY");
    const yesterday = moment().subtract(1, 'd').format("DD-MM-YYYY");
    if (date === today) {
      return "сегодня"
    }
    if (date === yesterday) {
      return "вчера"
    }
    if (moment(date).isBefore(yesterday)) {
      return "неск.дней назад"
    }
  }

  return (
    <div className='nots' ref={popup}>
      <div className="nots-title">Уведомления</div>
      <div className="nots-track">
        {
          status === "loading" ?
          <svg className="nots-loader" xmlns="http://www.w3.org/2000/svg"  width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(50 50)">
              <g>
                <animateTransform attributeName="transform" type="rotate" calcMode="discrete" values="0;90;180;270;360" keyTimes="0;0.25;0.5;0.75;1" dur="2.2222222222222223s" repeatCount="indefinite"></animateTransform>
                <path d="M-50 0A50 50 0 1 0 50 0" fill="#f17f6a">
                  <animate attributeName="fill" calcMode="discrete" values="#f17f6a;#749df5;#888fab;#353b55;#f17f6a" keyTimes="0;0.24;0.49;0.74;0.99" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
                </path>
                <path d="M-50 0A50 50 0 0 1 50 0" fill="#749df5">
                  <animate attributeName="fill" calcMode="discrete" values="#749df5;#888fab;#353b55;#f17f6a;#749df5" keyTimes="0;0.25;0.5;0.75;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
                </path>
                <path d="M-49 0L49 0" stroke="#de3415" strokeWidth="2">
                  <animate attributeName="stroke" values="#f17f6a;#de3415;#1156ec;#749df5;#1156ec;#59607e;#888fab;#59607e;#25293b;#353b55;#25293b;#de3415;#f17f6a" keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
                </path>
                <g>
                  <path d="M-50 0A50 50 0 0 1 50 0Z" fill="#de3415">
                    <animate attributeName="fill" values="#f17f6a;#de3415;#1156ec;#749df5;#1156ec;#59607e;#888fab;#59607e;#25293b;#353b55;#25293b;#de3415;#f17f6a" keyTimes="0;0.124;0.125;0.25;0.374;0.375;0.5;0.624;0.625;0.75;0.874;0.875;1" dur="2.2222222222222223s" repeatCount="indefinite"></animate>
                  <animateTransform attributeName="transform" type="scale" values="1 1;1 0;1 -1;1 1" keyTimes="0;0.5;0.999;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                </path></g>
              </g>
            </g>
          </svg> :
          data?.notifications.map((item, i) => 
          <div key={i} className="nots-item">
            <div className={`nots-item-dateplate ${moment(item.date).isSame(moment().format("DD-MM-YYYY")) ? "active" : ''}`}>
              {getDateLabel(item.date)}
            </div>
            {
              item.title ? <div className="nots-item-title">{item.title}</div> : null
            }
            <div className="nots-item-text">{item.text}</div>
          </div>
          )
        }
      </div>
      <div className='nots-f'>
        <div className="nots-more">больше уведомлений</div>
      </div>
      <div className="nots-btn-close" onClick={closePopup}>
        <span></span>
      </div>
    </div>
  )
}
