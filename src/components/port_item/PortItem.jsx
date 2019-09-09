import React, { useState }  from 'react';
import './portItem.css';

const PortItem = (props) =>{
    let colors = ['#ffffff ','#ffd700','#00d8ff','#00a1f1','#ffff00','#ffdf8b','#ffde57','#f5dc00','#ffc61e','#ffd430' ];
    const [selector, setSelector] = useState(0);
    return(
        <div className="item global-font" onMouseLeave={() => setSelector(0)} onMouseOver={() =>  setSelector(Math.floor(Math.random() * 10)+1)}>
            <img src={require(`../../assets/images/${props.img}`)} alt="" className="image" />
            <div className="opacity">
                <div className="info"></div>
            </div>
            <div className="tech">
                <p style={{color: colors[selector]}}>{props.children}</p>
            </div>
        </div>
    )
}

export default PortItem;