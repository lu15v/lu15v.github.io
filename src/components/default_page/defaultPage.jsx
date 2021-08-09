import React from 'react';
import './defaultPage.css';

const DefaultPage = () =>{

    const messageComponent = () =>{
        return(
            <div className="messageContainer">
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        )
    }


    return(
        <div className="flex-container">
            {messageComponent()}
            <div className="column white-column">
            </div>
            <div className="column yellow-column">
            </div>
            <div className="column blue-column">
            </div>
            <div className="column green-column">
            </div>
            <div className="column salmon-column">
            </div>
            <div className="column orange-column">
            </div>
            <div className="column navy-column">
            </div>
            <div className="column2 dark-blue-column">
            </div>
            <div className="column2 light-black-column">
            </div>
            <div className="column2 salmon-column">
            </div>
            <div className="column2 light-black-column">
            </div>
            <div className="column2 green-water-column"> 
            </div>
            <div className="column2 light-black-column">  
            </div>
            <div className="column2 grey-column">
            </div>
            <div className="column3 king-blue-column">
            </div>
            <div className="column3 light-grey-column">
            </div>
            <div className="column3 king-blue-column">
            </div>
            <div className="column3-last light-black-column">  
            </div>
        </div>
    )
}

export default DefaultPage;