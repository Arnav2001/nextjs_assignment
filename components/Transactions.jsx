'use client'
import React, {useState} from "react";
import DrawerImg from "./DrawerImg";
import Table from './table';
import {dropdownItems } from "../data/data";

const Transactions = ()=>{
    const [DropDownItems,setDropDownItems] = useState(dropdownItems);
      
      return (
        <div className="w-full h-full overflow-y-auto">
          {/* heading div */}
      <div className="flex flex-row w-fit mt-31 ml-219  mb-50 h-100 items-center">
        <div className="flex flex-col w-717  mr-288 ">
          <div className="w-180 h-42 mb-10">
          <h2 className=" text-customBlue font-semibold text-2xl leading-10">
          Transactions
          </h2>
          </div>
          <div className=" w-717 h-48 pr-2 ">
          <p className=" text-base leading-6 font-400 text-customGray">
          Learn about your org-wide spend on Applications along-with insights on relevant Transactions. Works best if you have your Accounting App integrated.
          </p>
          </div>
        </div>

        <div className="flex flex-row items-center h-44 w-196 bg-white border border-solid border-gray-300 rounded-5 text-var(--primary-color)">
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
      <div className="ml-220 mt-50 w-1201 flex flex-wrap items-center ">
        {DropDownItems.map((item, index) => (
          <div key={index} className="w-129 mr-20 h-44 flex bg-gray-100 rounded-md">
            {/* Content for each item */}
          </div>
          ))}
          <div className="flex items-center h-44 w-300 bg-white border border-solid border-gray-200 rounded-md">
      <div className='my-14 ml-14 mr-10'>
      <DrawerImg imgPath={"/assets/search.png"} width={17} height={17}/>
      </div>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-white h-17 w-58 "
        />
      </div>
      <div className="flex-1"></div>
          <div className="flex w-44 h-44 rounded-md bg-purple-100 justify-center items-center">
          <DrawerImg imgPath={'/assets/reload.png'} width={20} height={18} />
          </div>
          <div className="flex ml-20 w-44 h-44 rounded-md bg-purple-100 justify-center items-center">
          <DrawerImg imgPath={'/assets/download.png'} width={20} height={18} />
          </div>
            </div>
        {/* Table Component */}
          <Table/>
        </div>
        );
};

export default Transactions;