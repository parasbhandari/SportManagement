import React from 'react'

function Prize(props) {
  return (
    <div className='w-3/12'>
      <div className= { `border p-5 rounded-full ${props.color}`}>
      <h2 className='text-center mb-5'>{props.position}</h2>
      <h3 className='text-center text-xl'>{props.amount}</h3>
      </div>
    </div>
  )
}

export default Prize