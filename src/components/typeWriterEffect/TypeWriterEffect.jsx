import React from 'react';
import './typeWriterEffect.css';


const  typeWriterEffect = (props) => <p className="type-p"><span className="slash">/</span><span className="animated-text">{props.children}</span></p>
  
export default typeWriterEffect;