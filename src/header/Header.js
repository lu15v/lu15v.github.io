import React, { Component } from 'react';
import './header.css';
import NameEffect from '../nameEffect/NameEffect';
class Header extends Component {
    render() {
      return (
          <div className="page-header header">
              
              <NameEffect></NameEffect>
              <div>
                <p>{this.props.major}</p>      
                <p>{this.props.desc}</p>    
              </div>
          </div>
           

        
        );
    }
  }


  export default Header;