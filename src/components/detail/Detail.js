import React from 'react';
import  './detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
export default function Detail() {
  return (
    <div className="body">
        <Link to="/"><p className="back"><FontAwesomeIcon icon={['fas', 'chevron-circle-left']} /> Back</p></Link>
        <main>
          <div className="head">
              <h2>Project name</h2>
          </div>
          <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sit amet ex posuere efficitur. Curabitur rhoncus posuere lacus, nec porttitor dolor sagittis id. Aenean scelerisque tortor non ligula laoreet, quis posuere orci pulvinar. Pellentesque eleifend convallis orci eget pharetra. Sed turpis metus, ullamcorper nec risus quis, euismod auctor metus. Duis vulputate sapien at magna faucibus consectetur. Quisque euismod, tellus a tempus consequat, massa eros consequat urna, nec porta quam est ac ipsum. Etiam in risus non ligula tincidunt vehicula vitae non massa. Etiam feugiat id nulla a sollicitudin. Proin eu molestie ipsum, in bibendum dui. Proin finibus ut ipsum ut egestas. Sed egestas hendrerit velit eget elementum. Suspendisse pretium magna purus, ut euismod odio laoreet at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          </div>
        </main>
    </div>
  )
}
