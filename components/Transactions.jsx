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
          <div className="flex items-center pl-4 pr-20 mr-16 pt-2 ml-2">
            <div className="max-w-[717px] h-100">
              <h2 className="mb-2 text-customBlue font-poppins font-semibold text-2xl leading-10">
              Transactions
              </h2>
              <p className="font-poppins text-customGray font-normal text-base leading-6 max-w-[717px]">
              Learn about your org-wide spend on Applications along-with insights on relevant Transactions. Works best if you have your Accounting App integrated.
              </p>
            </div>
          </div>
          {/* drop down row */}
          <div className="flex flex-wrap mt-12 mb-10 ml-4 items-center pr-20 mr-16">
            {DropDownItems.map((item, index) => (
              <div key={index} className="min-w-[129px] min-h-[44px] m-2 flex bg-gray-100 rounded-md relative">
                {/* Content for each item */}
            
              </div>
            ))}
            <div className="flex items-center bg-white mx-4 p-2 rounded-md border border-solid border-gray-200">
      <DrawerImg imgPath={"/assets/search.png"} width={18} height={18}/>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-customBlue placeholder-customBlue ml-4 w-full"
        />
      </div>
            <div className="flex-1"/>
            <div className="flex min-w-[44px] min-h-[44px] rounded-md bg-purple-100 mr-2 justify-center items-center">
              <DrawerImg imgPath={'/assets/reload.png'} width={20} height={18} />
            </div>
            <div className="flex min-w-[44px] min-h-[44px] rounded-md bg-purple-100 justify-center items-center">
              <DrawerImg imgPath={'/assets/download.png'} width={20} height={18} />
            </div>
          </div>
        {/* Table Component */}
          <Table/>
        </div>
        );
};

export default Transactions;