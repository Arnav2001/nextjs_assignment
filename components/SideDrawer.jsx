'use client'
import DrawerImg from '../components/DrawerImg';
import React,{useState} from 'react';

const SideDrawer = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState('application');
  const handleItemClick = (item) => {
    onItemClick(item);
    setActiveItem(item);
  };
  const isItemActive = (item) => item === activeItem;
  return (
    <div className="bg-white h-screen w-280 overflow-y-auto flex flex-col border-r border-solid border-gray-200">
      {/* Logo at the top center */}
      <div className="flex items-center h-71 w-full justify-center border-b border-solid border-gray-200">
        <div className=''>
        <DrawerImg imgPath="/assets/mainLogo.svg" width={146} height={34} />
        </div>
      </div>

      {/* Insights section */}
      <div className="flex flex-col mr-10">
        <ul className="mt-39 ml-10 mr-10">
          <li className="flex rounded mb-25 ml-24.25 items-center">
            <DrawerImg imgPath="/assets/insights.svg" width={20.5} height={20.5} />
            <a href="#" className="hover:text-purple-400 ml-11.25 font-poppins text-base">
              Insights
            </a>
          </li>
        </ul>
        <h2 className="text-13 ml-34 mb-20 leading-5 font-normal text-gray-600">MENU</h2>
        <ul className="ml-10">
          <li className="flex  rounded h-50 items-center" style={{backgroundColor: isItemActive('application') ? '#F3E8FF' : ''}}>
          {isItemActive('application') ?
            <DrawerImg imgPath="/assets/rectangle.svg" width={4} height={30} /> :''}
            {isItemActive('application') ?
            <div className='ml-19.75 '> <DrawerImg imgPath="/assets/selApplications.svg" width={20.5} height={20.5} /></div> :
            <div className='ml-23.75 '><DrawerImg imgPath="/assets/applications.svg" width={20.5} height={20.5}/></div>}
            <a href="#" className="hover:text-purple-400 ml-12.75 font-poppins text-base" style={{ color: isItemActive('application') ? '#8B3DFF' : '' }} onClick={() => handleItemClick('application')}>
              Application
            </a>
            <div className='flex-1'></div>
            <div className='mr-9'>
            <DrawerImg imgPath="/assets/selDot.svg" width={8} height={8} />
            </div>
          </li>
          <li className="flex rounded  w-260 h-50 items-center">
            <div className='ml-24 mr-11.25'>
            <DrawerImg imgPath="/assets/renewal.svg" width={21.5} height={19.5} />
            </div>
            <a href="#" className="hover:text-purple-400 font-poppins text-base">
              Renewals
            </a>
          </li>
          <li className="flex h-50 rounded items-center" style={{backgroundColor: isItemActive('transactions') ? '#F3E8FF' : ''}}>
          {isItemActive('transactions') ?
            <DrawerImg imgPath="/assets/rectangle.svg" width={4} height={30} /> :''}
            {isItemActive('transactions') ?
            <div className='ml-19.75'>
            <DrawerImg imgPath="/assets/selTransactions.svg" width={19.5} height={21.5} /> </div>:
             <div className='ml-23.75'><DrawerImg imgPath="/assets/transactions.svg" width={19.5} height={21.5}/> </div>}
            <a href="#" className="hover:text-purple-400 ml-11.25 font-poppins text-base" style={{ color: isItemActive('transactions') ? '#8B3DFF' : '' }} onClick={() => handleItemClick('transactions')}>
              Transactions
            </a>
          </li>
          <li className="flex h-50 rounded items-center">
            <div className='ml-23.75'>
            <DrawerImg imgPath="/assets/employee.svg" width={20.5} height={20.5} /> </div>
            <a href="#" className="hover:text-purple-400 ml-11.25 font-poppins text-base">
              Employees
            </a>
          </li>
        </ul>
      </div>

      {/* Settings section */}
      <h2 className="text-13 ml-34 mb-20 mt-25 leading-5 font-normal text-gray-600">SETTINGS</h2>
      <div className="flex flex-col mx-10">
        <ul className="">
        <li className="flex rounded h-50 items-center" style={{backgroundColor: isItemActive('integrations') ? '#F3E8FF' : ''}}>
          {isItemActive('integrations') ?
          
            <DrawerImg imgPath="/assets/rectangle.svg" width={4} height={30} /> :''}
            {isItemActive('integrations') ?
            <div className='ml-19.75'>
            <DrawerImg imgPath="/assets/selIntegrations.svg" width={21.5} height={13.5} /> </div> :
             <div className='ml-23.75'><DrawerImg imgPath="/assets/integrations.svg" width={21.5} height={13.5}/> </div>}
            <a href="#" className="hover:text-purple-400 ml-11.25 font-poppins text-base" style={{ color: isItemActive('integrations') ? '#8B3DFF' : '' }} onClick={() => handleItemClick('integrations')}>
              Integrations
            </a>
          </li>
          <li className="flex h-50 rounded  items-center">
            <div className='ml-24'>
            <DrawerImg imgPath="/assets/account.svg" width={21.5} height={21.5} /> </div>
            <a href="#" className="hover:text-purple-400 ml-11.25 font-poppins text-base">
              Account
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1" />

      {/* Logo at the bottom */}
      <div className="flex mb-70 mt-249 items-center p-4">
        <div>
        <DrawerImg imgPath="/assets/bottomLogo.svg" width={32} height={32} />
        </div>
        <div className="ml-2">
          <h3 className="text-sm font-bold">Webex Staship</h3>
          <p className="text-xs">charlie@webex.com</p>
        </div>
        <div className='flex-1'></div>
        <DrawerImg imgPath="/assets/dropBtn.svg" width={10} height={5} />
      </div>
    </div>
  );
};

export default SideDrawer;