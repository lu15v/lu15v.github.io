import React, { Component }  from 'react';
import './content.css';
import PortItem from '../port_item/PortItem';



class Content extends Component {

    render() {
      return (
        <div className="wrapper">
            <PortItem img="marsExplorer.jpg">Mars Explorer</PortItem>
            <PortItem img="connect4.jpg">Connect 4</PortItem>
            <PortItem img="blockBreaker.jpg">Brick Breaker Game</PortItem>
            <PortItem img="restFB.jpg">Facebook WS</PortItem>
            <PortItem img="wandW.png">Text Adventure Game</PortItem>
            <PortItem img="4Clojure.jpg">Clojure Problems</PortItem>
            <PortItem img="poker.jpg">Poker </PortItem>
            <PortItem img="designPatt.jpg">Design Patterns </PortItem>
        </div>
        );
    }

  }
  


  export default Content;