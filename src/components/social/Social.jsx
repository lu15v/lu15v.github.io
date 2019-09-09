import React from 'react'
import  './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const social = () =>{
  return (
    <div className="social">
      <a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://mx.linkedin.com/in/luis-eduardo-ballinas-aguilar-a638a594"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      <a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/lu15v"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      <a id="email" target="_blank" rel="noopener noreferrer" href="mailto:luis.ed.ballinas@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
      <a id="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/XLu15Y"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
    </div>
  )
}

export default social;
