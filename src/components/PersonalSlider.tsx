import {motion}  from 'framer-motion';
import {useRef, useState, useEffect} from 'react';
import images from "./imagesPersonal";

const PersonalSlider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
 

    return (
      <div className="sliderBlock">
        <motion.div ref={carousel} className="carousel">
            <motion.div 
              drag="x" 
              dragConstraints={{right: 0, left: -width}}
              className="inner-carousel"
            >
              {images.map ((image) => {
                 return (
                   <motion.div key={image} className="personalSlider" >   
                     <img src={image}  alt=""/>
                   </motion.div>    
                 );
              })}
            </motion.div>
        </motion.div>
     </div>
    )
}

export default PersonalSlider ;


