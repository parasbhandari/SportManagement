import React from 'react'
import OnEvents from '../../Components/OnEvents'
import {Outlet} from "react-router-dom"
function LeaderBoard() {
  return (
    <div>
      <div className='flex justify-center mt-4'>
      <h1 className='font-bold text-indigo-200'>Ongoing Events</h1>
      </div>
      <OnEvents/>
      <Outlet/>
     
    </div>
  )
}

export default LeaderBoard