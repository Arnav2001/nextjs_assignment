import React, { useState } from "react";
import DrawerImg from "./DrawerImg";

const ApplicationContent = () => {
  const [items, setItems] = useState([
    { id: 1, imgUrl: '/assets/zoom.png', dotUrl: '/assets/greendot.png', width: 105, height: 105, heading:'Zoom', subHeading:'Collaboration', color:'#2D8CFF'},
    { id: 2, imgUrl: '/assets/zendesk.png', dotUrl: '/assets/yellowdot.png', width: 67, height: 67, heading:'Zendesk', subHeading:'Customer Support', color:'#03363D'},
    { id: 3, imgUrl: '/assets/salesforce.png', dotUrl: '/assets/greendot.png', width: 128, height: 90, heading:'Salesforce', subHeading:'Sales Automation', color:'#00A1E0'},
    { id: 1, imgUrl: '/assets/office.png', dotUrl: '/assets/pinkdot.png', width: 44, height: 44, heading:'Office 365', subHeading:'Identity Provider', color:'#1D1D1D'},
    { id: 2, imgUrl: '/assets/jira.png', dotUrl: '/assets/yellowdot.png', width: 95, height: 95, heading:'Jira', subHeading:'Development Tool', color:'#0052CC'},
    { id: 3, imgUrl: '/assets/notion.png', dotUrl: '/assets/yellowdot.png', width: 117, height: 76, heading:'Notion', subHeading:'Project Management', color:'#000000'},
    { id: 1, imgUrl: '/assets/invision.png', dotUrl: '/assets/greydot.png', width: 69, height: 69, heading:'Invision', subHeading:'Design Collaboration', color:'#DC395F'},
    { id: 2, imgUrl: '/assets/figma.png', dotUrl: '/assets/yellowdot.png', width: 136, height: 75, heading:'Figma', subHeading:'Design Collaboration', color:'#1E1E1E'},
    { id: 3, imgUrl: '/assets/sketch.png', dotUrl: '/assets/greendot.png', width: 105, height: 105, heading:'Sketch', subHeading:'Design Collaboration', color:'#25184A'},
    // Add more items as needed
  ]);
  const [DropDownItems,setDropDownItems] = useState([
    {id:1},
    {id:2},
    {id:3},
    {id:4},
  ]);

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
