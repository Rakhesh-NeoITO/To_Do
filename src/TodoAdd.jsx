import React from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";



function TodoAdd({AddFunction}) {
 
  
  return (
    <div className='w-3/4 h-12 rounded-lg pl-2 bg-slate-600 flex flex-row text-center justify-center'>
      <input id='name'  type="text" placeholder='Enter Your Task Here.....' 
       className='bg-slate-600  text-white outline-none pl-2 w-3/4 h-3/4 my-auto' />
      <BiMessageSquareAdd onClick={()=>{AddFunction(document.getElementById("name").value);document.getElementById('name').value=""}} className='text-white h-8 w-8  ml-8 rounded my-auto'/>
    </div>
    )
    
   
}



export default TodoAdd