import React, { Component } from 'react';


class Header extends Component {
    render() {
      return (
        <div className="container">
          <div className="page-header">
              <h1>{this.props.name}</h1>
          </div>
          <p>{this.props.major}</p>      
          <p>{this.props.desc}</p>     
        </div>
        
        );
    }
  }


  export default Header;