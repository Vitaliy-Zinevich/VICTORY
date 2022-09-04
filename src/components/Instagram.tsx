import React from 'react';

import insSvg from '../assets/icon.svg';

const Instagram: React.FC = () => {
  return (
    <li className="external__link">
      <a href="https://instagram.com/wow_viiii?igshid=YmMyMTA2M2Y=" className="menu__link">
        <img src={insSvg} alt="VICTORY" />
      </a>
    </li>
  );
};

export default Instagram;
