'use client'
import React, { useState } from "react";
import DrawerImg from "./DrawerImg";
import { applicationItems, dropdownItems } from "../data/data";
import DropDownMenu from '../components/dropDownMenu'


const ApplicationContent = () => {
  const [items, setItems] = useState(applicationItems);
  const [DropDownItems,setDropDownItems] = useState(dropdownItems);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      {/* heading div */}
      <div className="flex flex-row w-1201 mt-31 justify-between  mb-50 h-100 items-center">
        <div className="flex flex-col w-717 ">
          <div className="w-180 h-42 mb-10">
          <h2 className=" text-customBlue font-semibold text-28 leading-10">
            Applications
          </h2>
          </div>
          <div className=" w-717 h-12 ">
          <p className=" text-base leading-6 font-400 text-customGray">
            Missing on a Subscription below? You could always manually add missing Subscriptions <br /> you're looking to manage.
          </p>
          </div>
        </div>

        <div className="flex flex-row items-center h-fit w-fit bg-white border border-solid border-gray-300 rounded-5 text-var(--primary-color)">
          <div className="mr-10 ml-20">
          <DrawerImg imgPath={'/assets/selApplications.svg'} width={18} height={18} />
          </div>
          <div className=" flex flex-row my-10 mr-20 w-128 h-6">
          <p className=''>
            Add Application
          </p>
          </div>
        </div>
      </div>
      {/* drop down row */}
      <div className=" flex flex-col w-1201 h-666">
      <div className="flex mt-20 flex-wrap ">
      {DropDownItems.map((item, index) => (
        <div key={index} className=" mr-20">
        <DropDownMenu key={index} />
        </div>
      ))}
              
        <div className="flex-1"></div>
        <div className="flex w-44 h-44 rounded-md bg-purple-100 justify-center items-center">
          <DrawerImg imgPath={'/assets/reload.png'} width={20} height={18} />
        </div>
        <div className="flex ml-20 w-44 h-44 rounded-md bg-purple-100 justify-center items-center">
          <DrawerImg imgPath={'/assets/download.png'} width={20} height={18} />
        </div>
            </div>
          {/* company grid */}
      <div className="flex h- flex-col mt-54">

        {/* row-1 */}
        <div className="flex flex-row">
          <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[0].color}} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[0].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[0].imgUrl} width={items[0].width} height={items[0].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[0].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[0].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[1].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[1].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[1].imgUrl} width={items[1].width} height={items[1].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[1].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[1].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[2].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[2].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[2].imgUrl} width={items[2].width} height={items[2].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[2].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[2].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[3].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[3].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[3].imgUrl} width={items[3].width} height={items[3].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[3].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[3].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[4].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[4].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[4].imgUrl} width={items[4].width} height={items[4].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[4].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[4].subHeading}
                  </p>
                </div>
          </div>
          
        </div>

        {/* row-2 */}
        <div className="flex flex-row mt-52">
        <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[5].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[5].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[5].imgUrl} width={items[5].width} height={items[5].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[5].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[5].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 mr-43 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[6].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[6].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[6].imgUrl} width={items[6].width} height={items[6].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[6].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[6].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 mr-43 h-194 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[7].color }} className="min-w-[204px] min-h-[117px] max-w-[204px] max-h-[117px]  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[7].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[7].imgUrl} width={items[7].width} height={items[7].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[7].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[7].subHeading}
                  </p>
                </div>
          </div>
          <div className=" w-204 h-194 rounded-3xl items-center bg-gray-100 flex flex-col">
            <div style={{ backgroundColor: items[8].color }} className="w-204 h-117  flex bg-gray-100 rounded-3xl relative">
            {/* Content for each item */}
            <div className="absolute top-0 right-0">
              <DrawerImg imgPath={items[8].dotUrl} width={16} height={16} />
            </div>
            <div className="flex items-center justify-center w-full">
                <DrawerImg imgPath={items[8].imgUrl} width={items[8].width} height={items[8].height}/>
            </div>
            </div>
            <div className="text-center m-2 flex flex-col">
              <h1 className=" font-normal text-base leading-24 text-customBlue">
                  {items[8].heading}
                      </h1>
                      <p className=" font-normal text-sm leading-19.5 text-customLightGray">
                        {items[8].subHeading}
                  </p>
                </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ApplicationContent;
