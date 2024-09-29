import React from 'react'
import TeamImg from "../../../../assets/Team.jpg"
import ResetPassword from '../../../Auth/ResetPassword'
function TeamResetPassword() {
  return (
    <div>
      <ResetPassword name="Team" im={TeamImg}/>
    </div>
  )
}

export default TeamResetPassword