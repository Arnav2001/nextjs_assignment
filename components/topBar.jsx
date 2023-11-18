import React from 'react';
import DrawerImg from './DrawerImg';
const TopBar = () => {
  return (
    <div className="bg-white p-4 flex items-center ">
      {/* Left side: Logo */}
      <div className="flex items-center">
      <DrawerImg imgPath={"/assets/backButton.png"} width={24} height={24}/>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center bg-gray-200 w-96 mx-4 p-2 pl-2">
      <DrawerImg imgPath={"/assets/search.png"} width={18} height={18}/>
        <input
          type="text"
          placeholder="Search by employee or application"
          className="outline-none bg-gray-200 ml-4 w-full"
        />
      </div>
      <div className='flex-1'> </div>
      {/* Right side: Action Button */}
      <button className="flex items-center bg-purple-100 text-var(--primary-color) px-4 py-2">
        <DrawerImg imgPath={'/assets/invite.png'} width={22} height={16}/>
        <p className='ml-2'>Invite Members</p>
      </button>

      {/* Bell Icon */}
      <div className="flex items-center ml-4">
        <DrawerImg imgPath={'/assets/bell.png'} width={18} height={25}/>
      </div>

      {/* Profile Icon */}
      <div className="flex items-center ml-4">
        <DrawerImg imgPath={'/assets/profileImg.png'} width={36} height={36}/>
      </div>

      {/* Dropdown Icon */}
      <div className="flex items-center ml-4">
        <DrawerImg imgPath={'/assets/downArrow.png'} width={10} height={5}/>
      </div>
    </div>
  );
};

export default TopBar;
