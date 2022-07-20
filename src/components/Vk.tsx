import React from "react";
import vkSvg from '../assets/vk.svg'

const Vk: React.FC = () => {
    return (
        <div>
        <li className="external__link">
             <a href="https://vk.com/wow_viiii" className="menu__link"><img  src={vkSvg} alt="VICTORY" /></a>
        </li>
        </div>
    )
}

export default Vk;