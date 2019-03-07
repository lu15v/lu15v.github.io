import React from 'react'
import  './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Social() {
  return (
    <div className="social">
      <a href="https://mx.linkedin.com/in/luis-eduardo-ballinas-aguilar-a638a594"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      <a href="https://github.com/lu15v"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      <a href="mailto:luis.ed.ballinas@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
      <a href="https://www.facebook.com/XLu15Y"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
    </div>
  )
}
