import React from 'react'
import NavLink from '../navLink/NavLink';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <a className="link" href="https://github.com/lu15v/lu15v.github.io/blob/dev/src/assets/pdf/Resume.pdf">Resume</a>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/project">Portfolio</NavLink>
    </div>
  )
}
