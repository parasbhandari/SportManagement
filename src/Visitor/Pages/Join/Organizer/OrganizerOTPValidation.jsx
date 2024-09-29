import React from 'react'
import OTPValidation from '../../../Auth/OTPValidation'
import OrganizerImg from "../../../../assets/Organizer.jpg"
function OrganizerOTPValidation() {
  return (
    <div>
      <OTPValidation name="Organizer" im={OrganizerImg}/>
    </div>
  )
}

export default OrganizerOTPValidation