import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="header">
        <motion.h1
          initial={{
            x: -1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}>
          𝒱𝒾𝒸𝓉𝑜𝓇𝒾𝒶 𝒮𝒽𝑒𝓀𝒽𝑜𝓋𝓉𝓈𝑜𝓋𝒶
        </motion.h1>
      </div>
    </Link>
  );
};

export default Header;
