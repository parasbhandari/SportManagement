import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='rounded-full bg-sky-500/50 p-2'>{props.name}</button>
    </div>
  )
}

export default Button