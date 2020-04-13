import React from 'react';
import { NavLink }  from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props =>{
    
return(
    <ul className ="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/skill">Skills</NavLink>
        </li>
        <li>
            <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
        <NavLink to="/contact">ContactMe</NavLink>
        </li>
    </ul>
)
}

export default NavLinks;