import React from "react";
import vkSvg from '../assets/vk.svg'

const Vk = () => {
    return (
        <li className="external__link">
             <a  href="https://vk.com/wow_viiii" className="menu__link"><img  src={vkSvg} alt="VICTORY" /></a>
        </li>
    )
}

export default Vk;