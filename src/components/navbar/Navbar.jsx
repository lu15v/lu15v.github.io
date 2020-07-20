import React,{useState, useRef, useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import './navbar.css';

const navbar = () =>{
  const [isOnTop, setIsOnTop] = useState(false);
  let initialPosition;
  useEffect(() =>{
    console.log(window)
    window.addEventListener('scroll', onScroll, true);
    initialPosition = myRef.current.offsetTop;
  },[])


  const myRef = useRef();
  const onScroll = () => {
    if(myRef.current && ((initialPosition - myRef.current.offsetTop ) < 0) ) {
      setIsOnTop(true);
    }else{
      setIsOnTop(false);
    }

  }

  return(
    <div ref={myRef} className={isOnTop ? "navbar navbar-on-top": "navbar" }onScroll={onScroll}>  
        <a target="_blank" rel="noopener noreferrer" className="link" href="https://github.com/lu15v/lu15v.github.io/blob/dev/src/assets/pdf/Resume.pdf">Resume</a>
        <NavLink activeClassName="default active" className="default inactive" exact to="/">About me</NavLink>
        <NavLink  activeClassName="default active" className="default inactive" to="/project">Portfolio</NavLink>
    </div>
  )
};


export default navbar;