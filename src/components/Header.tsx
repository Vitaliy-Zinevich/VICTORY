import React from "react"

import vkSvg from '../assets/vk.svg'
import insSvg from '../assets/icon.svg'

function Header() {
    return (
        <div>
        <div className="header">
            <h1>𝒱𝒾𝒸𝓉𝑜𝓇𝒾𝒶 𝒮𝒽𝑒𝓀𝒽𝑜𝓋𝓉𝓈𝑜𝓋𝒶</h1>
        </div>
        <div className="header-wrapper">
            <nav className="menu">
             <ul className="menu__list">
                <li >
                    <a  href="#" className="menu__link">PERSONAL</a>
                    <ul className="sub-menu__list">
                      <li>
                         <a  href="#" className="sub-menu__link1">Faces</a>
                      </li>
                      <li >
                         <a  href="#" className="sub-menu__link1">Imperfection</a>
                      </li>
                      <li >
                         <a  href="#" className="sub-menu__link1">AMEN</a>
                      </li>
                 </ul>
               </li>
             <li>
                 <a  href="#" className="menu__link">COMMISSIONED</a>
                 <ul className="sub-menu__list">
                    <li >
                          <a  href="#" className="sub-menu__link2">Nature</a>
                    </li>
                    <li >
                          <a  href="#" className="sub-menu__link2">Inspiration</a>
                    </li>
                 </ul>
             </li>
             <li className="folder__collection">
                 <a aria-haspopup="true" href="#" className="menu__a">VIDEO</a>
             </li>
             <li className="folder__collection">
                 <a  href="#" className="menu__link">ABOUT</a>
                 <ul className="sub-menu__list">
                    <li >
                          <a  href="#" className="sub-menu__link3">Biography</a>
                    </li>
                    <li >
                          <a  href="#" className="sub-menu__link3">Hobby</a>
                    </li>
                 </ul>
             </li>
             <li className="page__collection">
                 <a  href="#" className="menu__link">CONTACT</a>
            </li>
             <li className="external__link">
                 <a  href="https://vk.com/wow_viiii" className="menu__link"><img  src={vkSvg}alt="VICTORY" /></a>
             </li>
             <li className="external__link">
                 <a  href="#" className="menu__link"><img  src={insSvg} alt="VICTORY" /></a>
             </li>
             </ul>
             </nav>
        </div>
        </div>
    )
}

export default Header;
