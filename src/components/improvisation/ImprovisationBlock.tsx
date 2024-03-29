import Slider from 'react-slick';
import { useState, useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/improvisation/inst1.jpg';
import img2 from '../../assets/improvisation/inst2.jpg';
import img3 from '../../assets/improvisation/inst3.jpg';
import img4 from '../../assets/improvisation/inst4.jpg';

const Improvisation = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  let settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  let settingsTree = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width > 550) {
    return (
      <div className="container__improvisation">
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img1} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img2} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img3} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img4} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  } else if (width > 350) {
    return (
      <div className="container__improvisation">
        <Slider {...settingsTwo}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img1} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img2} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img3} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img4} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="container__improvisation">
        <Slider {...settingsTree}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img1} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img2} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img3} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={img4} />
              </div>
              <div className="details">
                <h2>
                  everwoods <span className="job-title">Цена</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
};

export default Improvisation;
