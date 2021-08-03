import React from 'react';

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
              <div className="content">
                {this.props.children}
              </div>
              <TopButton buttonFun={this.handleClick}/>
            </>
        )
    }
}


export default PageContentContainer;