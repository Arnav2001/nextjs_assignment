"use client"
// pages/index.js

import SideDrawer from '../components/SideDrawer';
import MainContent from '../components/MainContent';
import React,{useState} from 'react';
const Home = () => {
  const [selectedItem, setSelectedItem] = useState<String |null>(null);
  const handleDrawerItemClick = (item: string) => {
    setSelectedItem(item);
    console.log(item);
  };
  return (
    <div className='flex fixed w-screen h-screen'>
      
      <div>
      <SideDrawer onItemClick={handleDrawerItemClick} />
      </div>
      <div className='flex-1'>
        <MainContent selectedItem={selectedItem}/>
      </div>
    </div>
  );
};

export default Home;
