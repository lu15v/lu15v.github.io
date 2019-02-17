import React, { Component }  from 'react';
import './content.css';
import PortItem from '../port_item/PortItem';



class Content extends Component {

    render() {
      return (
        <div className="wrapper">
            <PortItem img="">Mars Explorer</PortItem>
            <PortItem img="">Connect 4</PortItem>
            <PortItem img="">Brick Breaker Game</PortItem>
            <PortItem img="">Facebook WS</PortItem>
            <PortItem img="">Text Adventure Game</PortItem>
            <PortItem img="">Clojure Problems</PortItem>
        </div>
        );
    }

  }
  


  export default Content;