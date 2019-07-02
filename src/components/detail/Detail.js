import React from 'react';
import  './detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, withRouter} from 'react-router-dom';
import {projectDetailInfo} from '../../constants/projectDetailsInfo'

const  Detail = () =>{
  const projName = window.location.pathname.replace('/project/','');
  const projObject = projectDetailInfo[projName];

  return (
    <div className="body">
        <Link to="/project"><p className="back"><FontAwesomeIcon icon={['fas', 'chevron-circle-left']} /> Back</p></Link>
        <main id="project-content">
          <div className="head">
            <div className="proj-name">
              <h2>{projObject.name}</h2>         
            </div>
            <div className="proj-repo">
              <a href={projObject.github} title="Git Repository" target="_blank">
                <svg className="devicon-git-plain" viewBox="0 0 128 128">
                  <path fill="#F34F29" d="M124.742,58.378L69.625,3.264c-3.172-3.174-8.32-3.174-11.497,0L46.685,14.71l14.518,14.518c3.375-1.139,7.243-0.375,9.932,2.314c2.703,2.706,3.462,6.607,2.293,9.993L87.42,55.529c3.385-1.167,7.292-0.413,9.994,2.295c3.78,3.777,3.78,9.9,0,13.679c-3.78,3.78-9.901,3.78-13.683,0c-2.842-2.844-3.545-7.019-2.105-10.521L68.578,47.933l-0.002,34.341c0.922,0.455,1.791,1.063,2.559,1.828c3.779,3.777,3.779,9.898,0,13.683c-3.779,3.777-9.904,3.777-13.679,0c-3.778-3.784-4.088-9.905-0.311-13.683C58.079,83.169,59,82.464,60,81.992V47.333c-1-0.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983,20.333L3.229,58.123c-3.175,3.177-3.155,8.325,0.02,11.5l55.126,55.114c3.173,3.174,8.325,3.174,11.503,0l54.86-54.858C127.913,66.703,127.916,61.552,124.742,58.378z"/>
                  
                </svg>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="proj-tech">
                <h5>Tech</h5>

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
  )
}
export default withRouter(Detail);
