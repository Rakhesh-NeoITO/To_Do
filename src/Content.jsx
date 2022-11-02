import React,{useState} from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { BiMessageSquareEdit,BiHeartCircle } from "react-icons/bi";

function Content({item,SetTODOS,SelectedRemove,Update}) {
  const [ButtonClick,setButtonClick]=useState(false)
  console.log(item)
  return (
    <div className=' h-12 rounded-lg pl-2 bg-slate-600 flex flex-row text-center justify-center mt-2'>
        <input defaultChecked={item.ischecked} type="checkbox" name=""  className='h-4 w-4 my-auto' onClick={()=>{SetTODOS(item.id )}}/>
        {ButtonClick === true ? <input id='some' type="text" className='w-3/4 my-auto text-white bg-inherit ml-5 '  placeholder='You Can Type The Task Here...'/> : <p className={`w-3/4 my-auto text-white bg-inherit ml-5 ${item.ischecked && 'line-through'}`}>{item.content}</p>}
       
       {ButtonClick ?<BiHeartCircle className=' h-[30px] w-[30px] text-white my-auto' onClick={()=>{setButtonClick((current) => !current);Update(item.id,document.getElementById("some").value);}} />:<BiMessageSquareEdit className=' h-[30px] w-[30px] text-white my-auto' onClick={()=>setButtonClick((current) => !current)} />}
        
        <IoMdRemoveCircleOutline className='ml-4 h-[30px] w-[30px] text-white my-auto' onClick={()=>SelectedRemove(item.id)} />
    </div>
  )
}

export default Content