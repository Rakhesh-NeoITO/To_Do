import React from 'react'

function ProgressBar({Progress,total,Remove}) {
  return (
   <div className=' md:flex flex-row justify-between w-3/4  '>
        <p className=' bg-orange-400 rounded-md p-3 text-white w-full  md:w-auto  mb-3'>{`${Progress()} of ${total} Task Completed`}</p>
        <input type="button" value="Remove the Checked Task's" className='bg-orange-400 rounded-md p-3 text-white w-full md:w-auto mb-3' onClick={()=>Remove()} />
   </div>
  )
}

export default ProgressBar