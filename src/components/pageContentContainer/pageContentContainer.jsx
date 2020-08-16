import React from 'react';

import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './pageContentContainer.css';
import TopButton from '../top_button/topButton';

class PageContentContainer extends React.Component {

    handleClick = () =>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    render(){
        return(
            <>
              <Header name="Luis Ballinas" major="Software Engineer" desc="Web developer and music lover from México " img="mex-icon-32.png" ></Header>
              <Navbar/>
              <div className="content">
                {this.props.children}
              </div>
              <Footer/>
              <TopButton buttonFun={this.handleClick}/>
            </>
        )
    }
}


export default PageContentContainer;