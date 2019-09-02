import React from 'react';
import Error from '../../assets/images/error.svg';
import {Link} from 'react-router-dom';
import './defaultPage.css';

const defaultPage = () =>(
    <div className="default-page">
        <h1>Great! You kill him</h1>
        <h3 >But don't worry about it, we'll hide him for you</h3>
        <Link to="/" className="linkStyle">Home</Link>
        <Link to="/project" className="linkStyle">Portfolio</Link>
        <img  alt="" src={Error}></img>
    </div>
)


export default defaultPage;