import React from 'react';
import { Link } from 'react-router-dom';

const Biography: React.FC = () => {
  return (
    <div>
      <li className="folder__collection">
        <Link to="/biography" className="menu__link">
          Biography
        </Link>
      </li>
    </div>
  );
};

export default Biography;
