import { useState } from 'react';
import BtnSlider from '../BtnSlider';
import dataSliderLife from './dataSliderLife';

const LifeSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSliderLife.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderLife.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderLife.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slide">
      {dataSliderLife.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={process.env.PUBLIC_URL + `/ImgLife/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className="container-dots">
        {Array.from({ length: dataSliderLife.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
        ))}
      </div>
    </div>
  );
};

export default LifeSlider;
