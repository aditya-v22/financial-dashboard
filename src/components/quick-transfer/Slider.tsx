import React, { useState } from 'react';
import SlickSlider, { CustomArrowProps as SlickArrowProps } from 'react-slick';
import { ArrowIcon } from '../icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';

type CustomArrowProps = SlickArrowProps & {
  direction: 'left' | 'right';
};

const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, direction }) => {
  return (
    <button
      className={`absolute z-10 h-10 w-10 md:h-[50px] md:w-[50px] flex items-center justify-center bg-light shadow-shadow-1 text-primary-100 rounded-full top-1/2 transform -translate-y-1/2 ${
        direction === 'left' ? '-left-[50px]' : '-right-[50px]'
      }`}
      onClick={onClick}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
};

const SLIDER_NAME = 'Slider';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
};

interface SliderProps {
  children: React.ReactNode;
  totalSlides: number;
}

const Slider: React.FC<SliderProps> = ({ children, totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SlickSlider
      {...settings}
      beforeChange={(_oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
      }}
      className='![&>.slick-list>.slick-track>.slick-slide]:w-52'
      prevArrow={currentSlide > 0 ? <CustomArrow direction='left' /> : <div />}
      nextArrow={currentSlide < totalSlides - settings.slidesToShow ? <CustomArrow direction='right' /> : <div />}
    >
      {children}
    </SlickSlider>
  );
};

Slider.displayName = SLIDER_NAME;

export { Slider };
