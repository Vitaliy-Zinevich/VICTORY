import React from 'react';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';

interface BtnItemProps {
  moveSlide: () => void;
  direction: string;
}

const BtnSlider: React.FC<BtnItemProps> = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
};

export default BtnSlider;
