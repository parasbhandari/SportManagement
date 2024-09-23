import React from 'react'
import { useState } from 'react'
import Details from "../../../Components/Details"
import MatchSheet from '../../../Components/MatchSheet';
import Scores from '../../../Components/Scores';
function _Events() {
  const [activeTab, setActiveTab] = useState('Details');

  // Function to handle the click event
const handleClick = (tab) => {
    setActiveTab(tab);  // Update the active tab
};
  return (
    <div className="w-10/12 mx-auto my-10 ">
      <div className="container mx-auto h-56 bg-[url('https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain')] bg-cover bg-center object-left-top relative
rounded-3xl">
        <p className='absolute bottom-2 left-4 p-4 text-2xl font-bold text-red-200'>Chitwan Football League</p>
      </div>
      <div className='League_Detail my-10'>
      <ul className='flex justify-between w-2/5 font-bold'>
      <li 
        className={`cursor-pointer ${activeTab === 'Details' ? 'border-b-4 border-white' : ''}`}
        onClick={() => handleClick('Details')}
      >
        Details
      </li>
      <li 
        className={`cursor-pointer ${activeTab === 'Match/TieSheet' ? 'border-b-4 border-white' : ''}`}
        onClick={() => handleClick('Match/TieSheet')}
      >
        Match/TieSheet
      </li>
    </ul>
      </div>
      {
        activeTab=="Details"? <Details/>: <MatchSheet/> 
      }
     
    </div>
  )
}
export default _Events;


