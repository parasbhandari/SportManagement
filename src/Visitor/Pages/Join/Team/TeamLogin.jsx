import React from 'react'
import LoginBoard from '../../../Auth/LoginBoard'
import TeamImg from "../../../../assets/Team.jpg"
function TeamLogin() {
  return (
    <div>
    <LoginBoard name="Team" im={TeamImg}/>
    </div>
  )
}

export default TeamLogin