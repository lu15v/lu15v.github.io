import React, { Component }  from 'react';
import './nameEffect.css';
import L from '../../assets/images/L.png';
import B from '../../assets/images/B.png';
import {isMobile} from "react-device-detect";

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
        let cssDevice = isMobile ? "text text-mobile" : "text";

      return (
        <ul className={this.state.hover ? `${cssDevice} color` : `${cssDevice} hidden` } onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
            <li className="image-spacing"><img className="spaced size" src={L} alt="L" /></li>
            <li className="ghost">u</li>
            <li className="ghost">i</li>
            <li className="ghost">s</li>
            <li className="b-spacing"><img className="spaced size" src={B} alt="B" /></li>
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