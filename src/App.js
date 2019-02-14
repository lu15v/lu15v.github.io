import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import  Header from './header/Header';
import NavBar from './navBar/NavBar';
import Content from './content/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook,faGithub,faLinkedin,faEnvelope); 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover located in "></Header>
        <NavBar nLink="4"></NavBar>
        <Content></Content>
      </div>
    );
  } 
}

export default App;
