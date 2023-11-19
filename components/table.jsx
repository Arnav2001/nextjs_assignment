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
    <div className="container mt-8 pr-20 mr-16">
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead>
          <tr>
            <th className="py-2 px-2  border-b bg-gray-200">Date</th>
            <th className="py-2 px-2  border-b bg-gray-200">Description</th>
            <th className="py-2 px-2  border-b bg-gray-200">Amount</th>
            <th className="py-2 px-2  border-b bg-gray-200">Message</th>
            <th className="py-2 px-2  border-b bg-gray-200">Apps</th>
            <th className="py-2 px-2  border-b bg-gray-200">Source</th>
          </tr>
        </thead>
        <tbody>
          {TransactionItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-2 border-b text-center">{item.date}</td>
              <td className="py-2 px-2 border-b text-center">{item.desc}</td>
              <td className="py-2 px-2 border-b text-center">{item.amount}</td>
              <td className="py-2 px-2 border-b text-center">{item.message}</td>
              <td className="py-2 border-b text-center">
              </td>
              <td className="py-2 border-b text-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
