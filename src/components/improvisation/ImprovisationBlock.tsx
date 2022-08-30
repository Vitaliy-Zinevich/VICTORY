import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/improvisation/inst1.jpg';
import img2 from '../../assets/improvisation/inst2.jpg';
import img3 from '../../assets/improvisation/inst3.jpg';
import img4 from '../../assets/improvisation/inst4.jpg';
import insImg from '../../assets/instagram.jpg';
import vkImg from '../../assets/vk.png';

const Improvisation = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };
  return (
    <div className="container__improvisation">
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img1} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <img src={vkImg} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insImg} />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                ФИО <span className="job-title">Цена</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img2} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                ФИО <span className="job-title">Цена</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                ФИО <span className="job-title">Цена</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img4} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                ФИО <span className="job-title">Цена</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Improvisation;
