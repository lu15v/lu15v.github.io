import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Content from './components/content/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faChevronCircleLeft, faHeart, faGuitar, faPlay, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './components/detail/Detail';
import Main from './components/main/Main';
import egg from './constants/egg';
import DefaultPage from './components/default_page/defaultPage';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

library.add(faFacebook,faGithub,faLinkedin,faEnvelope, faChevronCircleLeft, faHeart, faGuitar, faPlay, faChevronUp); 

class App extends Component {

  componentDidMount(){
    console.log(egg)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover from México " img="mex-icon-32.png" ></Header>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/project' component={Content}/>
              <Route  path='/project/:item' component={Detail}/>
              <Route component={DefaultPage} />
          </Switch>
          <Footer/>
        </div>         
      </Router>
    );
  } 
}

export default App;
