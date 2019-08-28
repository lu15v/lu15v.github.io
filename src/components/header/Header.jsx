import React, { Component } from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
import TypeWriterEffect from '../typeWriterEffect/TypeWriterEffect';
import Social from '../social/Social';
import {isMobile} from "react-device-detect";

class Header extends Component {
    render() {
      return (
          <div className={isMobile ? "header-mobile" : "header" }>       
              <NameEffect></NameEffect>
              <TypeWriterEffect>{this.props.major}</TypeWriterEffect>  
              <p>{this.props.desc} <img  alt="" src={require(`../../assets/icons/${this.props.img}`)}></img></p>    
              <Social></Social>        
          </div>
        );
    }
  }


  export default Header;