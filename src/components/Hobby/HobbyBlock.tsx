import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import hobby1 from '../../assets/hobby/1.jpg';
import hobby4 from '../../assets/hobby/4.jpg';
import hobby5 from '../../assets/hobby/5.jpg';
import hobby6 from '../../assets/hobby/6.jpg';
import hobby7 from '../../assets/hobby/7.jpg';
import hobby8 from '../../assets/hobby/8.jpg';
import hobby9 from '../../assets/hobby/9.jpg';

const HobbyBlock: React.FC = () => {
  let images = [hobby1, hobby4, hobby5, hobby6, hobby7, hobby8, hobby9];

  const [width, setWidth] = useState(0);
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="container__hobby">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">
          {images.map((image, index) => {
            return (
              <motion.div className="item" key={index}>
                <img src={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HobbyBlock;
