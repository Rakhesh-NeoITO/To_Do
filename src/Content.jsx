import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { BiMessageSquareEdit } from "react-icons/bi";
function Content({item}) {
  return (
    <div className='w-3/4 h-12 rounded-lg pl-2 bg-slate-600 flex flex-row text-center justify-center '>
        <input type="checkbox" name="" id="" className='h-4 w-4 my-auto'/>
        <p className='w-3/4 my-auto text-white'>{item.content}.</p>
        <input type="button" value=""/>
        <BiMessageSquareEdit className=' h-[30px] w-[30px] text-white my-auto' />
        <IoMdRemoveCircleOutline className='ml-4 h-[30px] w-[30px] text-white my-auto' />
    </div>
  )
}

export default Content