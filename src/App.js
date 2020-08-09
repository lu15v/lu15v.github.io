import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Content from './components/content/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faChevronCircleLeft, faHeart, faGuitar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './components/detail/Detail';
import Main from './components/main/Main';
import egg from './constants/egg';
import DefaultPage from './components/default_page/defaultPage';
library.add(faFacebook,faGithub,faLinkedin,faEnvelope, faChevronCircleLeft, faHeart, faGuitar, faPlay); 

class App extends Component {

  componentDidMount(){
    console.log(egg)
  }

  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/project' component={Content}/>
                <Route  path='/project/:item' component={Detail}/>
                <Route component={DefaultPage} />
            </Switch>
          </div>         
      </Router>
    );
  } 
}

export default App;
