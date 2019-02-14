import React, { Component }  from 'react';
import './content.css';
import PortItem from '../port_item/PortItem';



class Content extends Component {

    render() {
      return (
        <div className="wrapper">
            <PortItem></PortItem>
            <PortItem></PortItem>
            <PortItem></PortItem>
            <PortItem></PortItem>
        </div>
        );
    }

  }
  


  export default Content;