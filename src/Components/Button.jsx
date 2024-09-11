import React from 'react'

function Button(props) {
  return (
    <div>
      <button className={`rounded-full ${props.color} p-3`}>{props.name}</button>
    </div>
  )
}

export default Button