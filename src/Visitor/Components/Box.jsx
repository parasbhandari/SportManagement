import React from 'react'
import Button from './Button'

function Box(props) {
  return (
    <div className="relative w-5/12 p-20 flex flex-col items-center justify-center bg-cover bg-center border-8 border-black shadow-2xl shadow-black rounded-xl"
      style={{ backgroundImage: `url(${props.im})` }} // Set the background image using inline style
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
      
      {/* Content on top of the darkened background */}
      <h2 className='relative font-bold text-white z-10'>{props.name}</h2>
      <div className='relative flex flex-col items-center z-10'>
        <div className='mb-5 mt-3 text-xl p-4'>
          <Button name="Login" color="bg-sky-800" />
        </div>
        <div className='text-xl'>
          <Button name="Register" color="bg-indigo-600/60" />
        </div>
      </div>
    </div>
  )
}

export default Box
