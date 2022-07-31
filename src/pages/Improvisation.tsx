import React from 'react';
import { Link } from 'react-router-dom';

const Improvisation: React.FC = () => {
  return (
    <li>
      <Link to="/improvisation" className="menu__link">
        IMPROVISATION
      </Link>
    </li>
  );
};

export default Improvisation;
