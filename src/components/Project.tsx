import React from 'react';
import Header from './Header';
import Menu from './Menu';
import PersonalSlider from './personal/PersonalSlider';
import Imperfection from '../pages/Imperfection';
import Footer from './Footer';
import ContactBlock from './contact/ContactBlock';

import { Route, Routes } from 'react-router-dom';
import Life from '../pages/Life';
import Amen from '../pages/Amen';
import ImprovisationBlock from './improvisation/ImprovisationBlock';
import HobbyBlock from './Hobby/HobbyBlock';

const Project: React.FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<PersonalSlider />} />
        <Route path="/imperfection" element={<Imperfection />} />
        <Route path="/contact" element={<ContactBlock />} />
        <Route path="/life" element={<Life />} />
        <Route path="/amen" element={<Amen />} />
        <Route path="/improvisation" element={<ImprovisationBlock />} />
        <Route path="/hobby" element={<HobbyBlock />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Project;
