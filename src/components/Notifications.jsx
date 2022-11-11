import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from '../utils/date';

import SvgSelector from '../utils/SvgSelector';
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
          <SvgSelector id="loader" classes="nots-loader"/> :
          !data?.notifications ?
          <div className="nots-track-placeholder">{data.message}</div> :
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
