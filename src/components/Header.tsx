import React from "react"

function Header() {
    return (
        <div>
        <div className="header">
            <h1>𝒱𝒾𝒸𝓉𝑜𝓇𝒾𝒶 𝒮𝒽𝑒𝓀𝒽𝑜𝓋𝓉𝓈𝑜𝓋𝒶</h1>
        </div>
        <div className="wrapper">
            <nav className="menu__nav">
             <ul className="menu__ul">
             <li className="folder__collection">
                 <a aria-haspopup="true" href="#" className="menu__a">PERSONAL</a>
             </li>
             <li className="folder__collection">
                 <a aria-haspopup="true" href="#" className="menu__a">COMMISSIONED</a>
             </li>
             <li className="folder__collection">
                 <a aria-haspopup="true" href="#" className="menu__a">VIDEO</a>
             </li>
             <li className="folder__collection">
                 <a aria-haspopup="true" href="#" className="menu__a">ABOUT</a>
             </li>
             <li className="page__collection">
                 <a  href="#" className="menu__a">CONTACT</a>
            </li>
             <li className="external__link">
                 <a  href="https://vk.com/wow_viiii" className="menu__a"><img src="" alt="#VICTORY" /></a>
             </li>
             <li className="external__link">
                 <a  href="#" className="menu__a"><img src="" alt="VICTORY" /></a>
             </li>
             </ul>
             </nav>
        </div>
        </div>
    )
}

export default Header;
