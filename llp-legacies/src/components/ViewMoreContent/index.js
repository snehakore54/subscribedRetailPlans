import React from 'react';
import './index.css'

const ViewMoreContent= props => {
    const { viewDetails } = props;
    const { imageUrl, headText, desc } = viewDetails

    return (
        <>
         <div className='cards-content'>
            <li className="wcu-card banner-card-item wcu-section" style={{height: '320px', display:'flex', flexDirection:'column'}}>
                <div>
                    <img src={imageUrl} alt="img" className='img' />
                    <h1 className='card-title'>{headText}</h1>
                    <p className="description">{desc}</p>
                </div>
            </li>
        </div>

        </>
       
    );
};

export default ViewMoreContent