import React from 'react';
import Personal from '../pages/Personal';
import Commissioned from '../pages/Commissioned';
import Video from '../pages/Video';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Vk from './Vk';
import Instagram from './Instagram';

const Menu: React.FC = () => {
  return (
    <div className="header-wrapper">
      <nav className="menu">
        <ul className="menu__list">
          <Personal />
          <Commissioned />
          <Video />
          <About />
          <Contact />
          <Vk />
          <Instagram />
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
