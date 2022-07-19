import React from "react";
import { Link } from "react-router-dom";

const Personal = () => {
    return (
        <li >
          <Link to="/" className="menu__link">PERSONAL</Link >
           <ul className="sub-menu__list">
            <li>
               <Link to="#" className="sub-menu__link1">Faces</Link >
            </li>
            <li >
              <Link to="/imperfection" className="sub-menu__link1">Imperfection</Link >
            </li>
            <li >
             <Link to="#" className="sub-menu__link1">AMEN</Link >
            </li>
          </ul>
       </li>
    )
}

export default Personal;