import React from 'react';
//import DeadLink from '../../assets/images/dead_link.jpg';
import {Link} from 'react-router-dom';
import './defaultPage.css';

const defaultPage = () =>(
    <div>
        <h1>Great! You kill him</h1>
        <h3>But don't worry about it we'll fix it for you</h3>
        <Link to="/" className="linkStyle"><p>Home</p></Link>
        <Link to="/project" className="linkStyle"><p>Portfolio</p></Link>
        <div>
            {/*<img  alt="" src={DeadLink}></img>*/}
        </div>
    </div>
)


export default defaultPage;