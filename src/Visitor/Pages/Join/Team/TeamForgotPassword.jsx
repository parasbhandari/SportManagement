import React from 'react'
import TeamImg from "../../../../assets/Team.jpg"
import ForgetPassword from '../../../Auth/ForgetPassword'
function TeamForgotPassword() {
  return (
    <div>
      <ForgetPassword name="Team" im={TeamImg}/>
    </div>
  )
}

export default TeamForgotPassword