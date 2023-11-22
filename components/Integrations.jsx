'use client'
import React, {useState} from "react";
import DrawerImg from "./DrawerImg";
import { duoImageItems, AccountingItems, EngagementItems } from "../data/data";
duoImageItems
const Integrations = ()=>{

    const [DropDownItems,setDropDownItems] = useState(duoImageItems);
    const [accountingItems,setAccountingItems] = useState(AccountingItems);
    const [engagementItems,setengagementItems] = useState(EngagementItems);
    return (
      <div className="w-1201 h-666 overflow-y-auto ml-220 mt-31">
        <div className="flex flex-col max-w-[717px] h-76">
          <div className="mb-10">
          <h2 className="text-customBlue  font-semibold text-2xl leading-10">
              Integrations
              </h2>
              </div>
              <div>
              <p className=" text-customGray text-base leading-6 max-w-[717px]">
              Missing your favorite integration? You can request one here.
              </p>
              </div>
        </div>
            {/* Identity and Single Sign on component */}
      <div className="flex mt-47 mb-20 flex-row items-center ">
            <h1 className=" text-customBlue font-semibold text-20 leading-30 mr-9">
              Identity and Single Sign On
            </h1>
             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
           </div>
      <div className="flex flex-col">
           {DropDownItems.map((item, index) => (
           <div key={index} className="rounded-3xl items-center h-101 w-full mb-20 bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
             <div className="ml-20 mr-15">
           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
           </div>
           <div className="flex flex-col">
             <div className="flex items-center flex-row">
             <h1 className=" text-customBlue font-semibold text-18 leading-27">
              {item.heading}
              </h1>
              <div className=" rounded-md ml-10 bg-purple-100 flex flex-row ">
                 <div className="mr-10 my-6 ml-12">
                 <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
                 </div>
                
                 <div className="my-6 mr-14">
                 <DrawerImg imgPath={'/assets/multiperson.png'} width={13} height={11}/>
                 </div>
                 </div>
             </div>
             <p className=" text-customLightGray font-normal">
            {item.subHeading}
          </p>
           </div>
           <div className="flex-1"></div>
           <div className="mr-30">
           <button className="flex items-center w-107 h-40  border border-solid border-gray-300 rounded-md " style={{backgroundColor:'#8B3DFF'}}>
           <p className='text-white font-normal text-base leading-6 mx-19 my-8'>
             Connect
           </p>
         </button>
         </div>
         </div>
         ))}
</div>
<div className="flex mt-30 mb-20 flex-row items-center ">
            <h1 className=" text-customBlue font-semibold text-20 leading-30 mr-9">
              Accounting
            </h1>
             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
           </div>
      <div className="flex flex-col">
           {accountingItems.map((item, index) => (
           <div key={index} className="rounded-3xl items-center h-101 w-full mb-20 bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
             <div className="ml-20 mr-15">
           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
           </div>
           <div className="flex flex-col">
             <div className="flex items-center flex-row">
             <h1 className=" text-customBlue font-semibold text-18 leading-27">
              {item.heading}
              </h1>
                 <div className=" rounded-md ml-10 bg-purple-100 flex flex-row ">
                 <div className="mr-10 my-6 ml-12">
                 <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
                 </div>
                
                 <div className="my-6 mr-14">
                 <DrawerImg imgPath={'/assets/money.png'} width={13} height={11}/>
                 </div>
                 </div>
             </div>
             <p className=" text-customLightGray font-normal">
            {item.subHeading}
          </p>
           </div>
           <div className="flex-1"></div>
           <div className="mr-30">
           <button className="flex items-center w-107 h-40  border border-solid border-gray-300 rounded-md " style={{backgroundColor:'#8B3DFF'}}>
           <p className='text-white font-normal text-base leading-6 mx-19 my-8'>
             Connect
           </p>
         </button>
         </div>
         </div>
         ))}
</div>
<div className="flex mt-30 mb-20 flex-row items-center ">
            <h1 className=" text-customBlue font-semibold text-20 leading-30 mr-9">
              Engagement
            </h1>
             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
           </div>
         {engagementItems.map((item, index) => (
           <div key={index} className="rounded-3xl cursor-not-allowed items-center h-101 w-full mb-20 bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
             <div className=" opacity-10 ml-20 mr-15">
           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
           </div>
           <div className="flex flex-col">
             <div className="flex items-center flex-row">
             <h1 className=" text-customBlue font-semibold text-18 leading-27">
              {item.heading}
              </h1>
                 <div className=" rounded-md ml-10 bg-purple-100 flex flex-row ">
                 <div className="mr-10 my-6 ml-12">
                 <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
                 </div>
                
                 <div className="my-6 mr-14">
                 <DrawerImg imgPath={'/assets/money.png'} width={13} height={11}/>
                 </div>
                 </div>
             </div>
             <p className=" text-customLightGray font-normal">
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
//         <div className="w-1201 h-666 overflow-y-auto ml-220 mt-31">
//           {/* heading div */}
//           <div className="flex items-center bg-slate-500">
//             <div className="max-w-[717px] h-76">
//               <h2 className="text-customBlue  font-semibold text-2xl leading-10">
//               Integrations
//               </h2>
//               <p className=" text-customGray text-base leading-6 max-w-[717px]">
//               Missing your favorite integration? You can request one here.
//               </p>
//             </div>
//             </div>
//            {/* Identity and Single Sign on component */}
//            <div className="flex flex-row items-center ">
//            <h1 className=" text-customBlue font-semibold text-20 leading-30">
//         Identity and Single Sign On
//       </h1>
//             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
//           </div>
//         <div className="flex flex-col">
//           {DropDownItems.map((item, index) => (
//           <div key={index} className="rounded-3xl items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
//             <div className="">
//           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex flex-row">
//             <h1 className=" text-customBlue font-semibold text-18 leading-27">
//         {item.heading}
//       </h1>
//                 <div className=" rounded-md bg-purple-100 flex flex-row ">
//                 <div className="">
//                 <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
//                 </div>
                
//                 <div className="">
//                 <DrawerImg imgPath={'/assets/multiperson.png'} width={13} height={11}/>
//                 </div>
//                 </div>
//             </div>
//             <p className=" text-customLightGray font-normal text-16 leading-24">
//         {item.subHeading}
//       </p>
//           </div>
//           <div className="flex-1"></div>
//           <div className="">
//           <button className="flex items-center  border border-solid border-gray-300 rounded-md " style={{backgroundColor:'#8B3DFF'}}>
//           <p className='text-white font-normal text-base leading-6'>
//             Connect
//           </p>
//         </button>
//         </div>
//         </div>
//         ))}
//         <div className="flex flex-row items-center">
//           <h1 className=" text-customBlue font-semibold text20 leading-30">
//         Accounting
//       </h1>
//             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
//           </div>
    
//         {accountingItems.map((item, index) => (
//           <div key={index} className="rounded-3xl items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
//             <div className="">
//           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex flex-row">
//             <h1 className=" text-customBlue font-semibold text-18 leading-27">
//         {item.heading}
//       </h1>
//                 <div className=" rounded-md bg-purple-100 flex flex-row">
//                 <div className="">
//                 <DrawerImg imgPath={'/assets/drawer2.png'} width={13} height={13}/>
//                 </div>
                
//                 <div className="">
//                 <DrawerImg imgPath={'/assets/money.png'} width={12} height={14}/>
//                 </div>
//                 </div>
//             </div>
//             <p className=" text-customLightGray font-normal text-16 leading-24 ">
//         {item.subHeading}
//       </p>
//           </div>
//           <div className=""></div>
//           <div className="">
//           <button className="flex items-center border border-solid border-gray-300 rounded-md " style={{backgroundColor:'#8B3DFF'}}>
//           <p className=' text-white font-normal text-base leading-6'>
//             Connect
//           </p>
//         </button>
//         </div>
//         </div>
//         ))}
// <div className="flex flex-row items-center">
//           <h1 className=" text-customBlue font-semibold text-20 leading-30 ">
//         Engagement
//       </h1>
//             <DrawerImg imgPath={'/assets/question.png'} width={18} height={18}/>
//           </div>
    
//         {engagementItems.map((item, index) => (
//           <div key={index} className="rounded-3xl cursor-not-allowed items-center bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-solid border-gray-100 flex flex-row">
//             <div className=" opacity-20 rounded-md" style={{ backgroundColor: item.color }}>
//           <DrawerImg imgPath={item.imgUrl} width={item.width} height={item.height}/>
//           </div>
//           <div className="flex opacity-20 flex-col">
//             <div className="flex flex-row">
//             <h1 className=" text-customBlue font-semibold text-18 leading-27">
//         {item.heading}
//       </h1>
//             </div>
//             <p className=" text-customLightGray font-normal text-16 leading-24">
//         {item.subHeading}
//       </p>
//           </div>
//           <div className="flex-1"></div>
//           <div className="">
//           <DrawerImg imgPath={'/assets/comingSoon.png'} width={146} height={57}/>
//         </div>
//         </div>
//         ))}
//         </div>
//         </div>
        );
};

export default Integrations;