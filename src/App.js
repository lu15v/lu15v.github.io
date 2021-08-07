import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faChevronCircleLeft, faHeart, faGuitar, faPlay, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import egg from './constants/egg';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutingContent from './components/routingContent/routingContent';

library.add(faFacebook,faGithub,faLinkedin,faEnvelope, faChevronCircleLeft, faHeart, faGuitar, faPlay, faChevronUp); 

class App extends Component {

  componentDidMount(){
    console.log(egg)
  }

  render() {
    return (
        <div className="App">
          <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover from México " img="mex-icon-32.png" ></Header>
          <RoutingContent/>
          <Footer/>
        </div>
    );
  } 
}

export default App;