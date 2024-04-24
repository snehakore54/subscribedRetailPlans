import React from 'react';
import './index.css'

export const CardItem = props => {
    const { bannerDetails } = props;
    const { imgUrl, headerText, description } = bannerDetails;

    return (
        <>
         <div className='cards-content'>
            <li className="wcu-card banner-card-item wcu-section" style={{height: '320px'}}>
                <div>
                    <img src={imgUrl} alt="img" className='img' />
                    <h1 className='card-title'>{headerText}</h1>
                    <p className="description">{description}</p>
                </div>
            </li>
        </div>

        </>
       
    );
};

export default CardItem