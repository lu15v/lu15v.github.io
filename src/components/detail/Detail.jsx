import React from 'react';
import  './detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, withRouter} from 'react-router-dom';
import {projectDetailInfo} from '../../constants/projectDetailsInfo'
import PageContentContainer from '../pageContentContainer/pageContentContainer';
import TechModule from '../techModule/techModule';
import {GIT} from '../../constants/devIcons';
import {icons} from '../../constants/iconsObject';

const  Detail = () =>{
  const projName = window.location.pathname.replace('/project/','');
  const projObject = projectDetailInfo[projName];

  return (
    <PageContentContainer>
      <div className="body global-font">
          <Link to="/project"><p className="back"><FontAwesomeIcon icon={['fas', 'chevron-circle-left']} /> Back</p></Link>
          <main id="project-content">
            <div className="head">
              <div className="proj-name">
                <h2>{projObject.name}</h2>         
              </div>
              <div className="proj-repo">
                <a href={projObject.github} title="Git Repository" target="_blank" rel="noopener noreferrer">
                  {GIT}
                </a>
              </div>
            </div>
            <div className="information">
              <div className="proj-tech">
                  <h5>Tech</h5>
                  <TechModule icons={icons[projName]}></TechModule>
              </div>
              <div className="proj-image">
                <img  alt="" src={require(`../../assets/images/${projObject.image}`)}></img>
              </div>
            </div>
            
            <div className="desc">
              {projObject.description}
            </div>
          </main>
      </div>
    </PageContentContainer>
  )
}
export default withRouter(Detail);
