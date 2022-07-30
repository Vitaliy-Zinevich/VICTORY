import { useState } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderImperfection from './dataSliderImperfection';

const ImperfectionSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

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

  return (
    <div className="container-slide">
      {dataSliderImperfection.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={process.env.PUBLIC_URL + `/ImgImperfection/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
};

export default ImperfectionSlider;
