'use client'
import React,{useState} from 'react';
import TopBar from '../components/topBar'
import SideDrawer from './SideDrawer';

const MainContent = () =>{

    const [selectedItem, setSelectedItem] = useState(null);

  const handleDrawerItemClick = (item) => {
    setSelectedItem(item);
  };
    return (
        <div className=" flex flex-col h-screen w-full">
            <TopBar/>
            <div className="flex">
        <div className="bg-white h-full w-full">
          {selectedItem === 'insights' && (
            <div>
              {/* Content for Insights */}
              <h1>Insights Content</h1>
            </div>
          )}
          {selectedItem === 'application' && (
            <div>
              {/* Content for Application */}
              <h1>Application Content</h1>
            </div>
          )}
          {selectedItem === 'renewals' && (
            <div>
              {/* Content for Renewals */}
              <h1>Renewals Content</h1>
            </div>
          )}
          {selectedItem === 'transactions' && (
            <div>
              {/* Content for Transactions */}
              <h1>Transactions Content</h1>
            </div>
          )}
          {selectedItem === 'employees' && (
            <div>
              {/* Content for Employees */}
              <h1>Employees Content</h1>
            </div>
          )}
          {selectedItem === 'integrations' && (
            <div>
              {/* Content for Integrations */}
              <h1>Integrations Content</h1>
            </div>
          )}
        </div>
      </div>
        </div>
    );
};

export default MainContent;