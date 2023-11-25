'use client'
import TopBar from '../components/topBar'
import Application from '../components/ApplicationContent'
import Transactions from '../components/Transactions';
import Integrations from '../components/Integrations';
const MainContent = ({selectedItem}) =>{
    return (
        <div className=" flex flex-col h-screen w-full">
            <TopBar/>
            <div className="flex-1 w-full h-full overflow-y-auto mb-5">
          {selectedItem === 'application' && (
            <Application/>
          )}
          {selectedItem === 'transactions' && (
            <Transactions/>
          )}
          {selectedItem === 'integrations' && (
            <Integrations/>
          )}
      </div>
        </div>
    );
};

export default MainContent;