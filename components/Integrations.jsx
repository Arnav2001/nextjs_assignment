'use client'
import React, {useState} from "react";
import DrawerImg from "./DrawerImg";

const Integrations = ()=>{

    const [DropDownItems,setDropDownItems] = useState([
        {imgUrl:'/assets/google.png', width:36,height:36, heading:'Google Workshpace', subHeading:'Setup Google Workspace with one-click to work flawlessly with Forescribe'},
        {imgUrl:'/assets/word.png', width:50,height:50, heading:'Office 365', subHeading:'Setup Office 365 if your organization depends on it as an Identity provider'},
      ]);
    const [accountingItems,setAccountingItems] = useState([
        {imgUrl:'/assets/xero.png', width:44,height:13, heading:'Xero', subHeading:'Gather actionable information for every known Application that persists in your books'},
        {imgUrl:'/assets/pb.png', width:52,height:52, heading:'Quickbooks', subHeading:'Organize your App spend and gather actionable insights to make informed decisions'},
        {imgUrl:'/assets/csv.png', width:52,height:52, heading:'CSV', subHeading:'Manually upload your transaction data every month and stay aware of your App spend and usage'},
    ]);
    const [engagementItems,setengagementItems] = useState([
        {color:'#518EF7', imgUrl:'/assets/zoom.png', width:52,height:52, heading:'Zoom', subHeading:'Gather actionable insights off Zoom and stay aware of its user engagement and analyse spend'},
        {color:'#800080', imgUrl:'/assets/slack.png', width:46,height:46, heading:'Slack', subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {color:'#0052CC', imgUrl:'/assets/jiramini.png', width:52,height:52, heading:'Jira', subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    ]);
    return (
        <div className="w-full h-full overflow-y-auto pb-10">
          {/* heading div */}
          <div className="flex items-center pl-4 pr-20 mr-16 pt-2">
            <div className="max-w-[717px] h-100">
              <h2 className="mb-2 text-customBlue  font-semibold text-2xl leading-10">
              Integrations
              </h2>
              <p className=" text-customGray font-normal text-base leading-6 max-w-[717px]">
              Missing your favorite integration? You can request one here.
              </p>
            </div>
          </div>
          {/* Identity and Single Sign on component */}
          <div className="flex flex-row items-center ml-4 mt-6 mb-2">
          <h1 className=" text-customBlue font-semibold text-20 leading-30  pr-2">
        Identity and Single Sign On
      </h1>
            <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
          </div>
        <div className="flex flex-col">
          {DropDownItems.map((item, index) => (
          <div key={index} className="rounded-3xl items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row ml-4 mr-32 mt-3 mb-3">
            <div className="pl-4">
          <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-row">
            <h1 className=" text-customBlue font-semibold text-18 leading-27">
        {item.heading}
      </h1>
                <div className=" rounded-md bg-purple-100 flex flex-row ml-2">
                <div className="p-1">
                <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
                </div>
                
                <div className="p-1">
                <DrawerImg imgPath={'/assets/multiperson.png'} width={13} height={11}/>
                </div>
                </div>
            </div>
            <p className=" text-customLightGray font-normal text-16 leading-24">
        {item.subHeading}
      </p>
          </div>
          <div className="flex-1"></div>
          <div className="pr-4">
          <button className="flex items-center  border border-solid border-gray-300 rounded-md px-4 py-2" style={{backgroundColor:'#8B3DFF'}}>
          <p className='ml-2  text-white font-normal text-base leading-6'>
            Connect
          </p>
        </button>
        </div>
        </div>
        ))}
        <div className="flex flex-row items-center ml-4 mt-6 mb-3">
          <h1 className=" text-customBlue font-semibold text-20 leading-30  pr-2">
        Accounting
      </h1>
            <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
          </div>
    
        {accountingItems.map((item, index) => (
          <div key={index} className="rounded-3xl items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row ml-4 mr-32 mt-3">
            <div className="pl-4">
          <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-row">
            <h1 className=" text-customBlue font-semibold text-18 leading-27">
        {item.heading}
      </h1>
                <div className=" rounded-md bg-purple-100 flex flex-row ml-2">
                <div className="p-1">
                <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
                </div>
                
                <div className="p-1">
                <DrawerImg imgPath={'/assets/money.png'} width={12} height={14}/>
                </div>
                </div>
            </div>
            <p className=" text-customLightGray font-normal text-16 leading-24 ">
        {item.subHeading}
      </p>
          </div>
          <div className="flex-1"></div>
          <div className="pr-4">
          <button className="flex items-center border border-solid border-gray-300 rounded-md px-4 py-2" style={{backgroundColor:'#8B3DFF'}}>
          <p className='ml-2  text-white font-normal text-base leading-6'>
            Connect
          </p>
        </button>
        </div>
        </div>
        ))}
<div className="flex flex-row items-center ml-4 mt-6 mb-3">
          <h1 className=" text-customBlue font-semibold text-20 leading-30  pr-2">
        Engagement
      </h1>
            <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
          </div>
    
        {engagementItems.map((item, index) => (
          <div key={index} className="rounded-3xl items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row ml-4 mr-32 mt-3">
            <div className="ml-4 rounded-md" style={{ backgroundColor: item.color }}>
          <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-row">
            <h1 className=" text-customBlue font-semibold text-18 leading-27">
        {item.heading}
      </h1>
            </div>
            <p className=" text-customLightGray font-normal text-16 leading-24">
        {item.subHeading}
      </p>
          </div>
          <div className="flex-1"></div>
          <div className="">
          <DrawerImg imgPath={'/assets/comingSoon.png'} width={146} height={57}/>
        </div>
        </div>
        ))}
        </div>
        </div>
        );
};

export default Integrations;