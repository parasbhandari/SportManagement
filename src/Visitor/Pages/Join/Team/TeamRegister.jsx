import React from 'react'
import TeamImg from "../../../../assets/Team.jpg"
import Register from '../../../Auth/Register'
function TeamRegister() {
  return (
    <div>
      <Register name="Team" im={TeamImg}/>
    </div>
  )
}

export default TeamRegister