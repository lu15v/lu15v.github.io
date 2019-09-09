import React from 'react'
import {NavLink} from 'react-router-dom';
import './navbar.css';

const navbar = () =>{
  return(
    <div className="navbar">
        <a target="_blank" rel="noopener noreferrer" className="link" href="https://github.com/lu15v/lu15v.github.io/blob/dev/src/assets/pdf/Resume.pdf">Resume</a>
        <NavLink activeClassName="default active" className="default inactive" exact to="/">About me</NavLink>
        <NavLink  activeClassName="default active" className="default inactive" to="/project">Portfolio</NavLink>
    </div>
  )
};


export default navbar;