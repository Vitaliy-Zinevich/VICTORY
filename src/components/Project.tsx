import React from "react"
import Header from "./Header"
import Menu from "./Menu"
import PersonalSlider from "./PersonalSlider";
import Imperfection from "../pages/Imperfection";
import Footer from "./Footer";

import { Route, Routes } from "react-router-dom";




const Project = () => {
    return (
        <div>
          <Header/>
          <Menu /> 
           <Routes>
            <Route path="/"  element={<PersonalSlider />}/>
            <Route path="/imperfection"  element={<Imperfection />}/>
           </Routes> 
          <Footer />
        </div>
    )
}

export default Project;
