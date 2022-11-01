import React from 'react'

function ProgressBar() {
  return (
   <div className=' md:flex flex-row justify-between w-3/4 '>
        <p className=' bg-orange-400 rounded-md p-3 text-white w-full md:w-auto mb-5 md:mb-0'>2 of 5 Task Completed</p>
        <input type="button" value="Remove the Checked Task's" className='bg-orange-400 rounded-md p-3 text-white w-full md:w-auto' />
   </div>
  )
}

export default ProgressBar