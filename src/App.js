import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import  Header from './components/header/Header';
import Content from './components/content/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './components/detail/Detail';

library.add(faFacebook,faGithub,faLinkedin,faEnvelope); 
class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover located in Guadalajara"></Header>
            <div className="navbar">
              <a href="https://github.com/lu15v/portfolio/blob/master/src/assets/pdf/Resume.pdf">Resume</a>
              <Link to={'/'}>Portfolio</Link>
            </div>
            <Switch>
              <Route exact path='/' component={Content}></Route>
              <Route  path='/item/:item' component={Detail}></Route>
            </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;
