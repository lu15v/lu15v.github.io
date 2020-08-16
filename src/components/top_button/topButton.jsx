import React,{useEffect, useState} from 'react';
import './topButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const topButton = (props) => {
    const {buttonFun} = props;
    
    const [show, setShow] = useState(false);

    useEffect(() =>{
        window.onscroll = function() {
            if(window.pageYOffset === 0) {
              setShow(false);
            }else if(window.pageYOffset !== 0 && !show){
              setShow(true);
            }
          };
    },[])

      
    return(
        show ?
        <button className="top-button" onClick={buttonFun}>
            <FontAwesomeIcon  className="button-icon" icon={['fas', 'chevron-up']} />
        </button> : null
    )
}

export default topButton