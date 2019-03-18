import React, { Component } from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
import TypeWriterEffect from '../typeWriterEffect/TypeWriterEffect';
import Social from '../social/Social';
const mex = '../../assets/icons/mex-icon-16.png';
class Header extends Component {
    render() {
      return (
          <div className="page-header header">       
              <div>
              <NameEffect></NameEffect>
              <TypeWriterEffect>{this.props.major}</TypeWriterEffect>  
                <p>{this.props.desc} <img  alt="" src={require(`../../assets/icons/${this.props.img}`)}></img></p>    
                <Social></Social>
              </div>            
          </div>
        );
    }
  }


  export default Header;