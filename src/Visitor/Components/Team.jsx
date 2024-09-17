import React from 'react'

function Team(props) {
  return (
    <div className='mt-10 w-1/4'>
      <img className="rounded-2xl" src={props.logo} alt="team_logo" />
    </div>
  )
}

export default Team