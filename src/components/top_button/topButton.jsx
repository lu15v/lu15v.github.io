import React from 'react';
import './topButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const topButton = (props) => {
    
    return(
        <a className="top-button">
            <FontAwesomeIcon  className="button-icon" icon={['fas', 'chevron-up']} />
        </a>
    )
}

export default topButton