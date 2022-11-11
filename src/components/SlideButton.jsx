import React from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideButton({children, classNames, onClickSide}) {

  const swiper = useSwiper();

  const handleClick = () => {
    if (onClickSide === "prev") {
      swiper.slidePrev();
    }
    if (onClickSide === "next") {
      swiper.slideNext();
    }
  }

  return (
    <button 
      className={classNames}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
