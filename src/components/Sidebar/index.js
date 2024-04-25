import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTv, faQuestionCircle, faCalendarAlt, faBuilding, faHeadset, faCog} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [showItems, setShowItems] = useState(false); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    
      const toggleSidebarItems = () => {
        setShowItems(!showItems);
      };
    
  
    return (
        <div className='sidebar-container' style={{backgroundColor:'white', height:'1160px'}}>
          <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar}>
        Toggle Sidebar
      </button>

      <button onClick={toggleSidebarItems}>
        Toggle Sidebar Items
      </button>

      {showItems && (
        <div >
          <ul className="sidebar-items" style={{fontSize:'30px', listStyleType:'none', padding:'5px', marginTop:'20px'}}>
            <li style={{paddingTop:'20px'}}>
                <FontAwesomeIcon icon={faSearch}/>
            </li>
            <li style={{paddingTop:'20px'}}>
              <FontAwesomeIcon icon={faTv} />
            </li>
            <li style={{paddingTop:'20px'}}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </li>
            <li style={{paddingTop:'20px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </li>
            <li style={{paddingTop:'20px'}}>
              <FontAwesomeIcon icon={faBuilding} />
            </li>
            <li style={{paddingTop:'20px'}}>
              <FontAwesomeIcon icon={faHeadset} />
            </li>
            <li style={{paddingTop:'620px'}}>
                <FontAwesomeIcon icon={faCog}/>
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>
        </div>

    );
  }

  export default Sidebar