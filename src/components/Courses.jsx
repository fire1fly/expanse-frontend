import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import 'swiper/scss';

import { fetchCourses } from '../store/courses'
import SlideButton from './SlideButton'

// const courses = [
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '80'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '40'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '20'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '5'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '5'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '5'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '5'
//   },
//   {
//     title: 'Корпоративная этика, как основа успеха в коллективе',
//     description: 'Описание описание описание описание описание описание',
//     progressValue: '5'
//   },
// ]

export default function Courses() {

  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.courses);

  console.log(data);

  useEffect(() => {
    dispatch(fetchCourses())
  }, []);

  const swiper = useRef();

  return (
    <div className="crs">
      <Swiper
        slidesPerView={4}
        spaceBetween={54}
        className="crs-slider"
      >
      <div className='crs-h'>
        <div className="crs-title">Обучение</div>
        {data?.courses?.length > 4 ?
          <div className="crs-bar">
            <SlideButton classNames="crs-bar-btn" onClickSide="prev">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.38453 0.449124C9.87269 0.93728 9.87269 1.72874 9.38453 2.21689L3.60175 7.99967L9.38453 13.7825C9.87269 14.2706 9.87269 15.0621 9.38453 15.5502C8.89638 16.0384 8.10492 16.0384 7.61677 15.5502L0.950101 8.88356C0.461946 8.3954 0.461946 7.60395 0.950101 7.11579L7.61677 0.449124C8.10492 -0.039031 8.89638 -0.039031 9.38453 0.449124Z"/>
              </svg>
            </SlideButton>
            <SlideButton classNames="crs-bar-btn" onClickSide="next">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.616117 0.449124C1.10427 -0.039031 1.89573 -0.039031 2.38388 0.449124L9.05055 7.11579C9.53871 7.60395 9.53871 8.3954 9.05055 8.88356L2.38388 15.5502C1.89573 16.0384 1.10427 16.0384 0.616117 15.5502C0.127961 15.0621 0.127961 14.2706 0.616117 13.7825L6.3989 7.99967L0.616117 2.21689C0.127961 1.72874 0.127961 0.93728 0.616117 0.449124Z"/>
              </svg>
            </SlideButton>
          </div> : null
        }
      </div>
      <div className='crs-track'>
          {
            data?.courses ? 
              data?.courses.map((item, i) => 
                <SwiperSlide key={i}>
                  <div className="crs-card">
                    <div className="crs-card-title">{item.title}</div>
                    <div className="crs-card-desc">{item.description.slice(0, 120)}...</div>
                    <div className="crs-card-progress">
                      <div className="crs-card-progress-value">
                        <div className="label">прогресс</div>
                        <div className="value">80%</div>
                      </div>
                      <div className="crs-card-progress-placeholder">
                        <div className="progress" style={{width: `80%`}}></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) :
              <div className="crs-track-placeholder">{data?.message}</div>
          }
      </div>
      </Swiper>
    </div>
  )
}
