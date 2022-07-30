import { useState } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderPersonal from './dataSliderPersonal';

const PersonalSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

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
    </div>
  );
};

export default PersonalSlider;
