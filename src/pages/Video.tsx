import React from "react";
import { Link } from "react-router-dom";

const Video: React.FC = () => {
    return (
        <li className="folder__collection">
           <Link aria-haspopup="true" to="#" className="menu__a">VIDEO</Link>
        </li>
    )
}

export default Video;