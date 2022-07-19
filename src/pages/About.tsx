import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <li className="folder__collection">
             <Link to="#" className="menu__link">ABOUT</Link >
               <ul className="sub-menu__list">
                 <li >
                     <Link to="#" className="sub-menu__link3">Biography</Link >
                 </li>
                 <li >
                     <Link to="#" className="sub-menu__link3">Hobby</Link >
                 </li>
               </ul>
         </li>
    )
}

export default About ;