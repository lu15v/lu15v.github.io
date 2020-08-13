
import React from 'react'
import './content.css';
import PortItem from '../port_item/PortItem';
import {Link} from 'react-router-dom';
import PageContentContainer from '../pageContentContainer/pageContentContainer';
 const content = () => {
    return (
        <PageContentContainer>
            <div className="wrapper">
                <Link to="/project/theRosa"><PortItem img="theRosa.png">The Rosa</PortItem></Link>
                <Link to="/project/photoSite"><PortItem img="photoSite.png">Photograph website </PortItem></Link>
                <Link to="/project/burger"><PortItem img="burgerSeller.png" path="burger">Burger Price Estimator</PortItem></Link>
                <Link to="/project/setsStore"><PortItem img="setsStore.png">Sets Store</PortItem></Link>
                <Link to="/project/wandw"><PortItem img="wandW.png">Text Adventure Game</PortItem></Link>
                <Link to="/project/restfb"><PortItem img="restFB.jpg">Facebook WS</PortItem></Link>
                <Link to="/project/marsExp"><PortItem img="marsExplorer.jpg" path="marsExp">Mars Explorer</PortItem></Link>
                <Link to="/project/connect4"><PortItem img="connect4.jpg">Connect 4</PortItem></Link>
                <Link to="/project/bbreaker"><PortItem img="blockBreaker.jpg">Brick Breaker Game</PortItem></Link>
                <Link to="/project/fourClojure"><PortItem img="4Clojure.jpg">Clojure Problems</PortItem></Link>
                {/*<Link to="/project/poker"><PortItem img="poker.jpg">Poker </PortItem></Link>*/}
                <Link to="/project/designPatt"><PortItem img="designPatt.jpg">Design Patterns </PortItem></Link>
            </div>
        </PageContentContainer>
    )
  }

  export default content;
  