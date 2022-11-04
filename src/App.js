
import './App.css';
import Content from './Content';
import ProgressBar from './ProgressBar';
import TodoAdd from './TodoAdd';
import uuid from 'react-uuid'

import { useState } from 'react';
function App() {

  const [toDos,setToDos]=useState([])
  function Add(element){
    const data={
      id : uuid(),
      content: element,
      ischecked: false,
    
    }
    if (element !== ""){
      setToDos([data,...toDos])
    }
  }
  const AddNew = (event) => {
    const data={
      id : uuid(),
      content: event.target.value,
      ischecked: false
    }
    if (event.target.value !== "" && event.key === 'Enter') {
     
      
      setToDos([data,...toDos])
      event.target.value=""
    }
    
  }
  function IsChecked(id){
    setToDos(toDos.map((element)=>{
      return(
        element.id === id ? {id: element.id, content:element.content, ischecked: !element.ischecked} : element
      );
    }))
  }

  function CompletedTask(){
    return (toDos.filter((element)=>{
      return(
        element.ischecked
      );
    }).length)
  }
  function RemoveCompletedTask(){
    setToDos(toDos.filter((element)=>{
      return(
        !element.ischecked
      );
    }))
  }
  function RemoveSelectedItem(id){
    setToDos(toDos.filter((element)=>{
      return(
        element.id !== id
      );
    }))
  }
  function SelectedUpdate(id,data){
    if(data !== "" ){
      setToDos(toDos.map((element)=>{
        console.log(element)
        return(
          element.id === id ? {id: element.id, content:data, ischecked: false } : element
        );
      }))
    }
  }
  

  return (
    <div className="App  w-screen flex justify-center items-center h-screen">
     <div className='toDo text-center flex flex-col items-center w-3/4 h-3/5 bg-slate-300 rounded space-y-4'>
        <h1 className='antialiased text-3xl italic font-bold mt-8'>TO DO LIST</h1>
        <TodoAdd AddFunction={Add} handleKeyDown={AddNew}/>
        <div className={`w-3/4 overflow-auto`}>
        {toDos.length > 0 && toDos.map((todo) => <Content key={todo.id} item={todo} SetTODOS={IsChecked} SelectedRemove={RemoveSelectedItem} Update={SelectedUpdate}  />)}
        
        </div>
        <ProgressBar  Progress={CompletedTask} total={toDos.length} Remove={RemoveCompletedTask}  />
        
     </div>
    </div>
  );
}

export default App;
