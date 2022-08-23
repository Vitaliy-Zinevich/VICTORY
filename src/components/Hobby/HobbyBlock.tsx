import React from 'react';
import hobby1 from '../../assets/hobby/hobby1.jpg';
import hobby2 from '../../assets/hobby/hobby2.jpg';
import hobby3 from '../../assets/hobby/hobby3.jpg';

const HobbyBlock = () => {
  return (
    <div className="container">
      <div className="content__hobby">
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby2} />
        </div>
        <div className="content__item">
          <img src={hobby3} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
        <div className="content__item">
          <img src={hobby1} />
        </div>
      </div>
    </div>
  );
};

export default HobbyBlock;
