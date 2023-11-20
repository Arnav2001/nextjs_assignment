import React, { useState } from "react";
import DrawerImg from "./DrawerImg";
import { applicationItems, dropdownItems } from "../data/data";
const ApplicationContent = () => {
  const [items, setItems] = useState(applicationItems);
  const [DropDownItems,setDropDownItems] = useState(dropdownItems);

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* heading div */}
      <div className="flex items-center pl-4 pr-20 mr-16 pt-2">
        <div className="max-w-[710px] h-100">
          <h2 className="mb-2 text-customBlue font-semibold text-2xl leading-10">
            Applications
          </h2>
          <p className=" font-normal text-base leading-6 text-customGray max-w-[717px]">
            Missing on a Subscription below? You could always manually add
            missing Subscriptions you're looking to manage.
          </p>
        </div>
        <div className="flex-1" />
        <button className="flex items-center bg-white border border-solid border-gray-300 rounded-md text-var(--primary-color) px-4 py-2">
          <DrawerImg imgPath={'/assets/drawer2.png'} width={18} height={18} />
          <p className='ml-2  font-normal text-base leading-6'>
            Add Application
          </p>
        </button>
      </div>
      {/* drop down row */}
      <div className="flex flex-wrap mt-12 mb-10 items-center pr-20 mr-16">
        {DropDownItems.map((item, index) => (
          <div key={index} className="min-w-[129px] min-h-[44px] m-2 flex bg-gray-100 rounded-md relative">
            {/* Content for each item */}
            <div className="">
            </div>
            <div className="">
            </div>
          </div>
        ))}
        <div className="flex-1"/>
        <div className="flex min-w-[44px] min-h-[44px] rounded-md bg-purple-100 mr-2 justify-center items-center">
          <DrawerImg imgPath={'/assets/reload.png'} width={20} height={18} />
        </div>
        <div className="flex min-w-[44px] min-h-[44px] rounded-md bg-purple-100 justify-center items-center">
          <DrawerImg imgPath={'/assets/download.png'} width={20} height={18} />
        </div>
      </div>
    {/* company grid */}
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="rounded-3xl items-center bg-gray-100 flex flex-col m-4">
          <div style={{ backgroundColor: item.color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={item.dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
            </div>
          </div>
          <div className="text-center m-2 flex flex-col">
      <h1 className=" font-normal text-base leading-24 text-customBlue">
        {item.heading}
      </h1>
      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
        {item.subHeading}
      </p>
    </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationContent;
