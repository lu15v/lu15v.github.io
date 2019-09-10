import React from 'react';

import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



class PageContentContainer extends React.Component {

    render(){
        return(
            <div>
              <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover from México " img="mex-icon-32.png" ></Header>
              <Navbar/>
              {this.props.children}
              <Footer/>
            </div>
        )
    }
}


export default PageContentContainer;