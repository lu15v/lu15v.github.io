import React, { Component } from 'react';
import  './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Social extends Component {
    render() {
      return (
          <div className="social">
             <a href="https://mx.linkedin.com/in/luis-eduardo-ballinas-aguilar-a638a594"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
             <a href="https://github.com/lu15v"><FontAwesomeIcon icon={['fab', 'github']} /></a>
             <a href="mailto:luis.ed.ballinas@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
          </div>

        );
    }
  }


  export default Social;