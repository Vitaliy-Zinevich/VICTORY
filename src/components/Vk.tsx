import React from "react";
import { Link } from "react-router-dom";
import vkSvg from '../assets/vk.svg'

const Vk = () => {
    return (
        <li className="external__link">
             <Link  to="https://vk.com/wow_viiii" className="menu__link"><img  src={vkSvg} alt="VICTORY" /></Link>
        </li>
    )
}

export default Vk;