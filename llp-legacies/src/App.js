import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
//import { FaCalendarAlt } from 'react-icons/fa';
//import { BiBell } from 'react-icons/bi';
import CardItem from './components/CardItem';
import MySavedLibrary from './components/MySavedLibrary'
import RelesesRecent from './components/RelesesRecent';
import ViewMoreContent from './components/ViewMoreContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const viewMoreDetails=[
  {
    viewId: 2,
    imageUrl: "https://s.marketwatch.com/public/resources/images/MW-FG386_Larges_ZG_20170222162407.jpg",
    headText: 'Economic Systems',
    desc: 'These are lists of Indian states and union territories by their nominal gross state domestic product (GSDP). GSDP is the sum of all value added by industries',
  },
  {
    viewId: 3,
    imageUrl: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/69858/960640process.PNG",
    headText: 'Tax Policy and Business Cycle',
    desc: 'It is well known by now that government spending has typically been procyclical in developing economies but acyclical or countercyclical in industrial countries',
  },
  {
    viewId: 4,
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.rMmStlrOAPHLNSsCUi2NIAHaDt&pid=Api&P=0&h=180",
    headText: 'Direct tax planning in india',
    desc: 'Today’s tax planning blends technology and business acumen to focus on consistency, compliance and the organization’s strategic objectives.',
  },
  {
    viewId: 5,
    imageUrl: "https://4.bp.blogspot.com/-4cLQaqI0jYM/TkmIL611lAI/AAAAAAAAPlc/z5MYhmcnqd0/s1600/taxrate.jpg",
    headText: 'Rates of Taxation',
    desc: 'The income tax slabs are different under the old and the new tax regimes. Further, the slab rates under the old tax regime.',
  }
]

const savedDetailsList=[
  {
    savedId: 1,
    changeClassName:'img-color-skyblue',
    header: "My Saved Library 1",
  },
  {
    savedId: 2,
    changeClassName:'img-color-darkblue',
    header: "My Saved Library 2",
  },
  {
    savedId: 3,
    changeClassName:'img-color-red',
    header: "My Saved Library 3",
  },  
  {
    savedId: 4,
    changeClassName:'img-color-orange',
    header: "My Saved Library 4",
  },
  {
    savedId: 5,
    changeClassName:'img-color-green',
    header: "My Saved Library 5",
  },  
]

const bannerCardsList = [
  {
    id: 1,
    imgUrl: 'https://www.nreionline.com/sites/nreionline.com/files/styles/article_featured_retina/public/capital-markets.jpg?itok=SBoT0qWq',
    headerText: 'State of Markets',
    description: 'The Market capitilization of indian stocks crossed USS4.5 trillion in january',
  },
  {
    id: 2,
    imgUrl:'https://valuationmasterclass.com/wp-content/uploads/2018/06/Fig.-4.4-Divided-Capex-Across-Asia-1024x627.png',
    headerText: 'The Central Capex Surge',
    description:
      'The last few years have seen a very substantial set up in capital',
  },
  {
    id: 3,
    imgUrl: 'https://files.taxfoundation.org/20200225094222/FF697-02-768x504.png',
    headerText: 'Direct Taxes and Business Cycle',
    description: 'The share of direct taxes in total tax collections of the central government',
    
  },
  {
    id: 4,
    imgUrl: 'https://img.graphicsurf.com/2020/11/bank-deposit-free-flat-illustration1.jpg',
    headerText:'Banking Monitor',
    description: 'Credit growth has remained broadly stable in recent weeks as just',
    
  },
]



function App() {
    const [showMore, setShowMore] = useState(false);
    const [showButton, setShowButton] = useState(true); 

    const handleViewMore = () => {
      setShowMore(true);
      setShowButton(false); 
    
  };
  

  return (
  <div className='div-container'>
      <Sidebar/>
      <div>
      <div className="bg-container navbar" >
        <div>
        <h1>Good Afternoon, Akshay</h1>
         <p className="para">you are subscribed to retail plan</p>
        </div>

       <div>
       <p>
       <span style={{gap:'5px'}}> <FontAwesomeIcon icon={faCalendarAlt} /></span>
        Today, 23 April 
        <span>  <FontAwesomeIcon icon={faClock}/></span>
        16:42</p>
      </div>
    </div>

    <div>
      <ul className='saved-cards'>
        {savedDetailsList.map(eachSaved => (
          <MySavedLibrary savedDetails={eachSaved} key = {eachSaved.savedId}/>
        ))}
      </ul>
    </div>
   
    <div className="app-container">

    <div style={{display:'flex', flexDirection:'column'}}>
    <ul className="banner-cards-list" >
      {bannerCardsList.map(eachBanner => (
        <CardItem bannerDetails={eachBanner} key={eachBanner.id} />
      ))}
    </ul>

    <div style={{display:'flex', justifyContent:'center'}}>
    {showButton && (
            <button type="button" className='btn' onClick={handleViewMore}>
              View More
            </button>
          )}
    </div>
    {showMore &&(
          <div>
            <ul className="banner-cards-list">
              {viewMoreDetails.map(eachDetail => (
                <ViewMoreContent viewDetails={eachDetail} key={eachDetail.viewId} />
              ))}
            </ul>
          </div>
        )}

    </div>

    <RelesesRecent/>
  </div>
  <div>
   
  </div>
      </div>

    </div>
    
  );
}

export default App;
