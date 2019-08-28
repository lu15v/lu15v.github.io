import React from 'react'
import  './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="text-center">
            <small className="copyright">
                Designed with
                &nbsp;
                <i className="heart">
                    <FontAwesomeIcon  icon={['fas', 'heart']} />
                </i>
                &nbsp; &  &nbsp;
                <i className="guitar">
                    <FontAwesomeIcon  icon={['fas', 'guitar']} />
                </i>
                &nbsp; by &nbsp;
                <a href="https://github.com/lu15v/">Lu15v</a>
            </small>
        </div>
    </footer>
  )
}
