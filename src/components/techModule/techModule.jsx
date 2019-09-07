import React from 'react';
import './techModule.css';

const TechModule = props =>{
    return(
        <div className="container-tech">
           {props.icons.map((el, index) =>{
               return(
                <div className="tech-icon" key={index}>
                    {el}
                </div>
               )
           })}
        </div>
        
    )
}


export default TechModule;
