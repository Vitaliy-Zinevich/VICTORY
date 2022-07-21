import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="header">
        <h1>𝒱𝒾𝒸𝓉𝑜𝓇𝒾𝒶 𝒮𝒽𝑒𝓀𝒽𝑜𝓋𝓉𝓈𝑜𝓋𝒶</h1>
      </div>
    </Link>
  );
};

export default Header;
