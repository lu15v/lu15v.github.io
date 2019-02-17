import React, { Component }  from 'react';
import './content.css';
import PortItem from '../port_item/PortItem';



class Content extends Component {

    render() {
      return (
        <div className="wrapper">
            <PortItem>Mars Explorer</PortItem>
            <PortItem>Connect 4</PortItem>
            <PortItem>Brick Breaker Game</PortItem>
            <PortItem>Facebook WS</PortItem>
            <PortItem>Text Adventure Game</PortItem>
            <PortItem>Clojure Problems</PortItem>
        </div>
        );
    }

  }
  


  export default Content;