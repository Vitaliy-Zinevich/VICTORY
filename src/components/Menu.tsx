import React from 'react';
import Personal from '../pages/Personal';
import Improvisation from '../pages/Improvisation';
import Hobby from '../pages/Hobby';
import Biography from '../pages/Biography';
import Contact from '../pages/Contact';
import Vk from './Vk';
import Instagram from './Instagram';

const Menu: React.FC = () => {
  return (
    <div className="header-wrapper">
      <nav className="menu">
        <ul className="menu__list">
          <Personal />
          <Improvisation />
          <Hobby />
          <Biography />
          <Contact />
          <Vk />
          <Instagram />
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
