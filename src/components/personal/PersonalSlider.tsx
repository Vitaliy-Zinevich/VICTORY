import { useState, useEffect } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderPersonal from './dataSliderPersonal';

const PersonalSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const autoScroll = true;
  let slideInterval: NodeJS.Timer;
  let intervalTime = 5000;

  const nextSlide = () => {
    if (slideIndex !== dataSliderPersonal.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderPersonal.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderPersonal.length);
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
      {dataSliderPersonal.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={process.env.PUBLIC_URL + `/ImgPersonal/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className="container-dots">
        {Array.from({ length: dataSliderPersonal.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active1' : 'dot1'}></div>
        ))}
      </div>
    </div>
  );
};

export default PersonalSlider;
