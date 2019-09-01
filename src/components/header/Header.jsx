import React from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
import TypeWriterEffect from '../typeWriterEffect/TypeWriterEffect';
import Social from '../social/Social';
import {isMobile} from "react-device-detect";

const header = (props) => {
      return (
          <div className={isMobile ? "header-mobile global-font" : "header global-font" }>       
              <NameEffect></NameEffect>
              <TypeWriterEffect>{props.major}</TypeWriterEffect>  
              <p>{props.desc} <img  alt="" src={require(`../../assets/icons/${props.img}`)}></img></p>    
              <Social></Social>        
          </div>
        );
  }


  export default header;