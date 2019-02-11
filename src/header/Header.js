import React, { Component } from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
import TypeWriterEffect from '../typeWriterEffect/TypeWriterEffect';
import Social from '../social/Social';
class Header extends Component {
    render() {
      return (
          <div className="page-header header">
              
              <NameEffect></NameEffect>
              <div>
              <TypeWriterEffect>Software Engineer</TypeWriterEffect>  
                <p>{this.props.desc}</p>    
                <Social></Social>
              </div>
              
          </div>
           

        
        );
    }
  }


  export default Header;