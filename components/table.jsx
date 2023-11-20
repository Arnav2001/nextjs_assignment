'use Client'

import React,{useState} from 'react';
import DrawerImg from './DrawerImg';
import { transactionItems } from '@/data/data';
const Table = () => {
    const [TransactionItems,setTransactionItems] = useState( transactionItems);

  return (
    <div className=" bg-gray-500 container mt-8 ml-6 mr-6 mb-10" style={{ maxWidth: '1201px' }}>
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Date</th>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Description</th>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Amount</th>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Message</th>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Apps</th>
            <th className="py-2 px-2 text-center  border-b bg-gray-200 text-black">Source</th>
          </tr>
        </thead>
        <tbody>
          {TransactionItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-2 border-b text-center text-customGray">{item.date}</td>
              <td className="py-2 px-2 border-b text-center text-customGray" >{item.desc}</td>
              <td className="py-2 px-2 border-b text-center text-green-600">{item.amount}</td>
              <td className="py-2 px-2 border-b text-center text-customGray" >{item.message}</td>
              <td className="py-2 px-2 border-b"><DrawerImg imgPath={'/assets/invision.png'} width={32} height={32}/></td>
              <td className=" py-2 px-2 border-b"><DrawerImg imgPath={'/assets/xero.png'} width={50} height={45}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
