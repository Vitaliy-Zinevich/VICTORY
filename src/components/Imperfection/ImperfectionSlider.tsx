import React from 'react';
import { useState, useEffect } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderImperfection from './dataSliderImperfection';

const ImperfectionSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const autoScroll = true;
  let slideInterval: NodeJS.Timer;
  let intervalTime = 5000;

  const nextSlide = () => {
    if (slideIndex !== dataSliderImperfection.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderImperfection.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderImperfection.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <div className="container-slide">
      {dataSliderImperfection.map((obj, index) => {
        return (
          <React.Fragment key={obj.id}>
            <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
              <img src={process.env.PUBLIC_URL + `/ImgImperfection/img${index + 1}.jpg`} />
            </div>
          </React.Fragment>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className="container-dots">
        {Array.from({ length: dataSliderImperfection.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
        ))}
      </div>
    </div>
  );
};

export default ImperfectionSlider;
