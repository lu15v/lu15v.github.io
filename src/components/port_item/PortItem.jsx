import React, { useState }  from 'react';
import './portItem.css';

const PortItem = (props) =>{
    let colors = ['#fff', '#ffd700','#00d8ff','#2eff2e','#cb2eff','#ff2eff','#7AA5A1','#ab9df2', '#912626','#C48787','#fc9867','#fffcdc','#69B569','#348bc3','#ff1493','#C15FA8',
                 '#b8c54c','#c37d46','#f0c865','#aa1aed','#d52c2d','#cfef91','#fccd1f','#cc82dd','#b8ae35','#20e379','#A3A7D4','#f3b948' ];
    const [selector, setSelector] = useState(0);
    console.log(selector)
    return(
        <div className="item global-font" onMouseLeave={() => setSelector(0)} onMouseOver={() =>  setSelector(Math.floor(Math.random() * 28)+ 1)}>
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