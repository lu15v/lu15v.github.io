import React from 'react';

import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './pageContentContainer.css';

class PageContentContainer extends React.Component {

    render(){
        return(
            <>
              <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover from México " img="mex-icon-32.png" ></Header>
              <Navbar/>
              <div className="content">
                {this.props.children}
              </div>
              <Footer/>
            </>
        )
    }
}


export default PageContentContainer;