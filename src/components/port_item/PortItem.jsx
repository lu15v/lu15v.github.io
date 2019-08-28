import React from 'react'
import './portItem.css';

const PortItem = (props) =>{
    return(
        <div className="item">
            <img src={require(`../../assets/images/${props.img}`)} alt="" className="image" />
            <div className="opacity">
                <div className="info"></div>
            </div>
            <div className="tech">
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default PortItem;