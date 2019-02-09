import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
      return (
          <div className="page-header header">
              <h1>{this.props.name}</h1>
              <div>
                <p>{this.props.major}</p>      
                <p>{this.props.desc}</p>    
              </div>
          </div>
           

        
        );
    }
  }


  export default Header;