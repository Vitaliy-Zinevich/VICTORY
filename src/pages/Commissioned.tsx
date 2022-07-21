import React from 'react';
import { Link } from 'react-router-dom';

const Commissioned: React.FC = () => {
  return (
    <li>
      <Link to="#" className="menu__link">
        COMMISSIONED
      </Link>
      <ul className="sub-menu__list">
        <li>
          <Link to="#" className="sub-menu__link2">
            Nature
          </Link>
        </li>
        <li>
          <Link to="#" className="sub-menu__link2">
            Inspiration
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Commissioned;
