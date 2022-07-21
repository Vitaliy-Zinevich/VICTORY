import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <li className="page__collection">
      <Link to="/contact" className="menu__link">
        CONTACT
      </Link>
    </li>
  );
};

export default Contact;
