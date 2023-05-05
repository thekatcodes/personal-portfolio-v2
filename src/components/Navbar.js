import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import logo from '../images/logo.png'

export default function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo image" className="logo" style={{width:35 + 'px'}}/>
            <div>
            <AnchorLink to="#about" title="About">About</AnchorLink>


         </div>
        </nav>
    )
}