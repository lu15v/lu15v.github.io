import React, { Component }  from 'react';
import './nameEffect.css';




class NameEffect extends Component {
    state = {
        hover: false
    };

    mouseOver() {
        this.setState ({hover: true});
    }
    mouseOut() {
        this.setState ({hover: false});
    }

    render() {
      return (
        <ul className={this.state.hover ? "text color" : "text hidden" } onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
            <li className="spaced">L</li>
            <li className="ghost">u</li>
            <li className="ghost">i</li>
            <li className="ghost">s</li>
            <li className="spaced">B</li>
            <li className="ghost">a</li>
            <li className="ghost">l</li>
            <li className="ghost">l</li>
            <li className="ghost">i</li>
            <li className="ghost">n</li>
            <li className="ghost">a</li>
            <li className="ghost">s</li>
        </ul>
        );
    }

  }
  


  export default NameEffect;