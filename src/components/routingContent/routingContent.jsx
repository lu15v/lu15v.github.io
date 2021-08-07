import React from 'react';

import './routingContent.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Content from '../content/Content';
import Detail from '../detail/Detail';
import DefaultPage from '../default_page/defaultPage';
import TopButton from '../top_button/topButton';

class RoutingContent extends React.Component {

    handleClick = () =>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    render(){
        return(
          <Router>
            <>
              <Navbar/>
              <div className="content">
                <Switch>
                  <Route exact path='/' component={Main}/>
                  <Route exact path='/project' component={Content}/>
                  <Route  path='/project/:item' component={Detail}/>
                  <Route component={DefaultPage} />
                </Switch>
                <TopButton buttonFun={this.handleClick}/>
              </div>
            </>
          </Router>
        )
    }
}


export default RoutingContent;