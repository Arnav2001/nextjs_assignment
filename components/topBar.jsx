import React from 'react';
import DrawerImg from './DrawerImg';
const TopBar = () => {
  return (
    <div className="bg-white flex h-71 w-full items-center justify-between border-b border-solid border-gray-200">
      {/* Left side: Logo */}
      <div className="ml-23 mt-23 mb-23 mr-33">
      <DrawerImg imgPath={"/assets/backButton.svg"} width={24} height={24}/>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center h-11 w-600 bg-search rounded-md">
      <div className=' ml-24.25 mr-10.75'>
      <DrawerImg imgPath={"/assets/search.svg"} width={18} height={18}/>
      </div>
        <input
          type="text"
          placeholder="Search by employee or application"
          className="outline-none bg-search text-searchtext placeholder-searchtext h-6 w-343 "
        />
      </div>
      <div className='flex-1'> </div>
      {/* Right side: Action Button */}
      <button className="flex items-center mr-30.2 w-198 h-10 bg-purple-100 text-var(--primary-color) rounded-md">
        <div className=' ml-5 mr-10'>
        <DrawerImg imgPath={'/assets/invite.svg'} width={22} height={16}/>
        </div>
        <p className=" font-poppins font-normal text-base leading-6">Invite members</p>
      </button>

      {/* Bell Icon */}
      <div className="flex items-center mr-30.8 ">
        <DrawerImg imgPath={'/assets/bell.svg'} width={18} height={25}/>
      </div>

      {/* Profile Icon */}
      <div className='flex items-center h-9 w-58 mr-31'>
      <div className="flex mr-3 items-center">
        <DrawerImg imgPath={'/assets/profileImg.svg'} width={36} height={36}/>
      </div>

      {/* Dropdown Icon */}
      <div className="flex items-center">
        <DrawerImg imgPath={'/assets/dropBtn.svg'} width={10} height={5}/>
      </div>
      </div>
    </div>
  );
};

export default TopBar;
