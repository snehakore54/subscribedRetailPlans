import React from 'react';

import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';


const MySavedLibrary = props => {
  const {savedDetails} = props
  const {changeClassName, header} = savedDetails

  return (

  <>
  <div className='content'>
          <li className='banner-card-item wcu-card' style={{height:'150px'}}>   
              <div>
              <FontAwesomeIcon icon={faFloppyDisk} className={changeClassName} />
                  <h1 className='card-title'>{header}</h1>
                  <p className="description">dd-mm-yyyy</p>
              </div>
          </li>
      </div>
      </>
  )
}

export default MySavedLibrary
