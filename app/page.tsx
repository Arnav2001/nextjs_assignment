'use client'

// pages/index.js

import SideDrawer from '../components/SideDrawer';
import MainContent from '../components/MainContent';
import React, { useState } from 'react';
import DrawerImg from '@/components/DrawerImg';
import ResponsiveComponent from '@/components/ResponsiveComponent';
import Head from 'next/head';
import Index from '../components/index'; 
const Home = () => {
  const [selectedItem, setSelectedItem] = useState<String | null>('application');
  const handleDrawerItemClick = (item: string) => {
    setSelectedItem(item);
    console.log(item);
  };

  return (
    <>
      <head>
        {/* Add the Poppins font link to the Head section */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <div className='flex w-full h-full'>
        <div>
          <SideDrawer onItemClick={handleDrawerItemClick} />
        </div>
        <div className='w-full relative'>
          <div className='h-64 w-64 absolute bottom-0 right-0 mr-4 mb-4'>
            <DrawerImg imgPath={'/assets/floatingBtn.png'} width={64} height={64} />
          </div>
          <MainContent selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
};

export default Home;
