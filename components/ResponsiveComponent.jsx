
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveComponent = ({ children }) => {
  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  return isLaptopOrLarger ? children : <div className='flex items-center justify-center w-screen h-screen'>
    <h1 className=' text-2xl text-black'>Content Not visible for screens smaller than laptop screen</h1>
  </div>;
};

export default ResponsiveComponent;
