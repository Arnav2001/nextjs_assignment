'use Client'

import React,{useState} from 'react';
import DrawerImg from './DrawerImg';

const Table = () => {
    const [TransactionItems,setTransactionItems] = useState([
    {heading:'Date',date:'Jan 13,2023', desc:'Invisionapp', amount:'$103 USD', message:'Invision', appUrl:'',},
    {heading:'Description',date:'Dec 13,2022', desc:'Figma Dec 13,2022', amount:'$592 USD', message:'Figma monthly renewal', appUrl:'',},
    {heading:'Amount',date:'Nov 13,2022', desc:'Zendesk chat', amount:'$1,240.87 USD', message:'Zendesk chat', appUrl:'',},
    {heading:'Message',date:'Nov 13,2022', desc:'Asana', amount:'$1,240.87 USD', message:'', appUrl:'',},
    {heading:'Apps',date:'Nov 13,2022', desc:'Notion Nov 13,2022', amount:'$1,240.87 USD', message:'Notion', appUrl:'',},
    {heading:'Source',date:'Nov 13,2022', desc:'Cloudflare', amount:'$12.87 USD', message:'', appUrl:'',},
  ]);

  return (
    <div className=" bg-gray-500 container mt-8 ml-6 mb-10" style={{ maxWidth: '1201px' }}>
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
