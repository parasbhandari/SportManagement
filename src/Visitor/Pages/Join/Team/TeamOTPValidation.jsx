import React from 'react'
import OTPValidation from '../../../Auth/OTPValidation'
import TeamImg from "../../../../assets/Team.jpg"
function TeamOTPValidation() {
  return (
    <div>
      <OTPValidation name="Team" im={TeamImg}/>
    </div>
  )
}

export default TeamOTPValidation