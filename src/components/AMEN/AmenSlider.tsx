import { useState } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderAmen from './dataSliderAmen';

const AmenSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSliderAmen.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderAmen.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderAmen.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slide">
      {dataSliderAmen.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={process.env.PUBLIC_URL + `/ImgAmen/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
};

export default AmenSlider;
