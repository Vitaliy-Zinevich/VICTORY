import React from 'react';
import hobby1 from '../../assets/hobby/1.jpg';
import hobby2 from '../../assets/hobby/2.jpg';
import hobby3 from '../../assets/hobby/3.jpg';
import hobby4 from '../../assets/hobby/4.jpg';
import hobby5 from '../../assets/hobby/5.jpg';
import hobby6 from '../../assets/hobby/6.jpg';
import hobby7 from '../../assets/hobby/7.jpg';
import hobby8 from '../../assets/hobby/8.jpg';
import hobby9 from '../../assets/hobby/9.jpg';

const HobbyBlock = () => {
  let data = [
    {
      id: 1,
      imgSrc: 'hobby1',
    },
    {
      id: 2,
      imgSrc: 'hobby2',
    },
    {
      id: 3,
      imgSrc: 'hobby3',
    },
    {
      id: 4,
      imgSrc: 'hobby4',
    },
    {
      id: 5,
      imgSrc: 'hobby5',
    },
    {
      id: 6,
      imgSrc: 'hobby6',
    },
    {
      id: 7,
      imgSrc: 'hobby7',
    },
    {
      id: 8,
      imgSrc: 'hobby8',
    },
    {
      id: 9,
      imgSrc: 'hobby9',
    },
  ];

  return <div className="container__hobby"></div>;
};

export default HobbyBlock;
