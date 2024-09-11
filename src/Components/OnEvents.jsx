import React from 'react'
import Button from './Button'
function OnEvents() {
  return (
    <div>
      <div className='border border-indigo-200 w-4/5 mx-auto shadow-lg shadow-indigo-500/50' >
        <div className='flex items-center p-10'>
          <div className='flex justify-center w-1/5'>
            <img className="w-22 h-20 rounded-lg" src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="logo" />
          </div>
          <div className='grow flex-col justify-start w-4/5'>
            <h1 className='text-gray-400'>Chitwan Football League</h1>
            <div className='flex justify-around items-center'>
              <p className='text-xl'>Upto 25 Aug</p>
             <Button name="Event Detail" color="bg-indigo-600/60"/>
             <Button name="Scores" color="bg-indigo-600/60"/>
            </div>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default OnEvents