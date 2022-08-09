import React from 'react';
import { Link } from 'react-router-dom';

const Hobby: React.FC = () => {
  return (
    <li className="folder__collection">
      <Link to="/hobby" className="menu__a">
        Hobby
      </Link>
    </li>
  );
};

export default Hobby;
