import React, { Component }  from 'react';
import './navBar.css';




class NavBar extends Component {
    render() {
      return (
        <div className="navbar">
            <a href="https://github.com/lu15v/portfolio/blob/master/src/assets/pdf/Resume.pdf">Resume</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
       </div>
        );
    }
  }


  export default NavBar;