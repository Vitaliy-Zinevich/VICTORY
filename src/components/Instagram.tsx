import React from "react";
import { Link } from "react-router-dom";
import insSvg from '../assets/icon.svg'

const Instagram = () => {
    return (
        <li className="external__link">
            <Link  to="#" className="menu__link"><img  src={insSvg} alt="VICTORY" /></Link>
        </li>
    )
}

export default Instagram;