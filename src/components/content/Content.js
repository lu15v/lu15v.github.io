import React, { Component }  from 'react';
import './content.css';
import PortItem from '../port_item/PortItem';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';


class Content extends Component {

    render() {
      return (
        <Router>
            <div className="wrapper">
                    <Route><PortItem img="marsExplorer.jpg" path="marsExp">Mars Explorer</PortItem></Route>
                    <Route><PortItem img="connect4.jpg">Connect 4</PortItem></Route>
                    <Route><PortItem img="blockBreaker.jpg">Brick Breaker Game</PortItem></Route>
                    <Route><PortItem img="restFB.jpg">Facebook WS</PortItem></Route>
                    <Route><PortItem img="wandW.png">Text Adventure Game</PortItem></Route>
                    <Route><PortItem img="4Clojure.jpg">Clojure Problems</PortItem></Route>
                    <Route><PortItem img="poker.jpg">Poker </PortItem></Route>
                    <Route><PortItem img="designPatt.jpg">Design Patterns </PortItem></Route>
            </div>
        </Router>
        );
    }

  }
  


  export default Content;