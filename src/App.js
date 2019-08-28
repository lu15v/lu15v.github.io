import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import  Header from './components/header/Header';
import Content from './components/content/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faChevronCircleLeft, faHeart, faGuitar, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './components/detail/Detail';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import egg from './constants/egg';

library.add(faFacebook,faGithub,faLinkedin,faEnvelope, faChevronCircleLeft, faHeart, faGuitar, faMicrochip); 

class App extends Component {

  componentDidMount(){
    console.log(egg)
  }

  render() {
    return (
      <Router>
        <div>
            <div className="App">
              <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover located in Guadalajara " img="mex-icon-32.png" ></Header>
              <Navbar/>
              <Switch>
                  <Route exact path='/' component={Main}></Route>
                  <Route exact path='/project' component={Content}></Route>
                  <Route  path='/project/:item' component={Detail}></Route>
              </Switch>
            </div>         
            <Footer/>
          </div>
      </Router>
    );
  } 
}

export default App;
