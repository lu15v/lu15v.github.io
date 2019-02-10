import React, { Component } from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
import TypeWriterEffect from '../typeWriterEffect/TypeWriterEffect';
class Header extends Component {
    render() {
      return (
          <div className="page-header header">
              
              <NameEffect></NameEffect>
              <div>
              <TypeWriterEffect>Software Engineer</TypeWriterEffect>  
                <p>{this.props.desc}</p>    
              </div>
              
          </div>
           

        
        );
    }
  }


  export default Header;