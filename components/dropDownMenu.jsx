// Import React and useState
import React, { useState } from 'react';

// Import your DrawerImg component
import DrawerImg from '../components/DrawerImg'; // Update the path

// YourComponent function
const DropDownMenu = ({key:index}) => {
  const DropDownItemsList = ['Item 1', 'Item 2', 'Item 3'];

  // State for managing dropdown visibility and selected item
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Toggle dropdown visibility
  const handleDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Handle item click in the dropdown
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropDownOpen(false);
  };

  return (
    <div key={index} className="w-129 justify-between items-center flex flex-col bg-white border border-solid border-gray-200 rounded-md ">
      {/* Content for each item */}
      <button onClick={handleDropDownClick}>
      <div className="w-129 h-44 justify-between items-center flex p-3">
        <div>
          <p className=' text-customLightGray'>{selectedItem ? selectedItem : 'Select'}</p>
        </div>
        <div>
            <DrawerImg imgPath={'/assets/dropBtn.svg'} width={10} height={5} />
        </div>
      </div>
      </button>

      {/* Dropdown list */}
      {isDropDownOpen && (
        <div className="">
          {DropDownItemsList.map((item, index) => (
            <div
              key={index}
              className=" w-full cursor-pointer text-customLightGray py-2 justify-between items-center flex flex-col bg-white rounded-md"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Export the YourComponent function
export default DropDownMenu;
