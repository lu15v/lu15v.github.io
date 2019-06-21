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
        <main>
          <div className="head">
              <h2>{projObject.name}</h2>
          </div>
          <div className="image">
          </div>
          <div className="desc">
          {projObject.description}
          </div>
        </main>
    </div>
  )
}
export default withRouter(Detail);