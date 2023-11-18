'use client'
import DrawerImg from '../components/DrawerImg';


const SideDrawer = ({ onItemClick }) => {
  const handleItemClick = (item) => {
    onItemClick(item);
  };
 
  return (
    <div className="bg-white h-screen w-60  flex flex-col left-0 top-0">
      {/* Logo at the top center */}
      <div className="flex items-center justify-center p-4">
        <DrawerImg imgPath="/assets/mainLogo.png" width={146} height={34} />
      </div>

      {/* Insights section */}
      <div className="flex flex-col text-black p-4">
        <ul className="mb-6">
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer1.png" width={20.5} height={20.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base">
              Insights
            </a>
          </li>
        </ul>
        <ul className="space-y-4 ">
          <li>
            <h2 className="text-xs leading-5 font-normal mb-2 text-gray-600">Menu</h2>
          </li>
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer2.png" width={20.5} height={20.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base" onClick={() => handleItemClick('application')}>
              Application
            </a>
          </li>
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer3.png" width={21.5} height={19.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base">
              Renewals
            </a>
          </li>
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer4.png" width={19.5} height={21.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base" onClick={() => handleItemClick('transactions')}>
              Transactions
            </a>
          </li>
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer5.png" width={20.5} height={20.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base">
              Employees
            </a>
          </li>
        </ul>
      </div>

      {/* Settings section */}
      <div className="flex flex-col text-black p-4">
        <h2 className="text-xs leading-5 font-normal mb-2 text-gray-600">Settings</h2>
        <ul className="space-y-4">
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer6.png" width={21.5} height={13.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base" onClick={() => handleItemClick('integrations')}>
              Integrations
            </a>
          </li>
          <li className="flex space-x-2 items-center">
            <DrawerImg imgPath="/assets/drawer7.png" width={21.5} height={21.5} />
            <a href="#" className="hover:text-purple-400 font-poppins text-base">
              Account
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1" />

      {/* Logo at the bottom */}
      <div className="flex items-center p-4">
        <div>
        <DrawerImg imgPath="/assets/bottomDrawerLogo.png" width={32} height={32} />
        </div>
        <div className="ml-2">
          <h3 className="text-sm font-bold">Webex Staship</h3>
          <p className="text-xs">charlie@webex.com</p>
        </div>
        <div className='flex-1'></div>
        <DrawerImg imgPath="/assets/downArrow.png" width={10} height={5} />
      </div>
    </div>
  );
};

export default SideDrawer;