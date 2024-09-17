import React from 'react'

function EventContactDetails() {
  return (
    <div className='event_detail flex mt-24 justify-around'>
    <div>
     <h2 className='m-4'>Event Contact Details</h2>
     <div className='mt-8'>
     <p className='m-4 text-xl'>Event Manager: Paras Bhandari</p>
     <p className='m-4 text-xl'>Email: eventmanager@gmail.com</p>
     <p className='m-4 text-xl'>Phone: 9821424252</p>
     </div>
     
    </div>
    <div>
     <img src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="_logo" className='h-52 w-42 rounded-full' />
    </div>
 </div>
  )
}

export default EventContactDetails