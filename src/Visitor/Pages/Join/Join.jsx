import React from 'react'
import Box from '../../Components/Box'
function Join() {
  return (
    <div>
      <div>
        <h1 className='text-center mt-5 font-bold'>Join Our Community</h1>
      </div>
      <div className='flex justify-around mt-12'>
        <Box 
          name="Event Organizer" 
          im="https://img.freepik.com/free-vector/purple-blue-gradient_78370-295.jpg?t=st=1724684670~exp=1724688270~hmac=2c5b9964d4aa0a2bf99cb853c9a4357bfdb8f7e18268137bc4d63eb0c4b2a66f&w=1380" 
          path="/Join/Organizer"
        />
        <Box 
          name="Team" 
          im="https://img.freepik.com/premium-photo/photo-french-national-team-field_1008415-34919.jpg?w=826" 
          path="/Join/Team"
        />
      </div>
    </div>
  )
}

export default Join
