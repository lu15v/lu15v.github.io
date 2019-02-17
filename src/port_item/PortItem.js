import React, { Component }  from 'react';
import './portItem.css';




class PortItem extends Component {

    render() {
      return (
        <div className="item">
            <img src={this.props.img}  className="image"/>
            <div className="opacity">
                <div className="info">John Doe</div>
            </div>
            <div className="tech">
                <p>{this.props.children}</p>
            </div>
            
        </div>
        );
    }

  }
  


  export default PortItem;