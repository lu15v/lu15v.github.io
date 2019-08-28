import React, { Component }  from 'react';
import './typeWriterEffect.css';




class TypeWriterEffect extends Component {

    render() {
      return (
        <span className="animated-text">{this.props.children}</span>
        );
    }

  }
  


  export default TypeWriterEffect;