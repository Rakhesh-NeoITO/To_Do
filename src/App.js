
import './App.css';
import Content from './Content';
import ProgressBar from './ProgressBar';
import TodoAdd from './TodoAdd';
import uuid from 'react-uuid'

import { useState } from 'react';
// interface toDoObj {
//   id:number;
//   value: string;
//   ischecked: boolean;
// }

function App() {
  const [toDos,setToDos]=useState([])
  function Add(element){
    const data={
      id : uuid(),
      content: element,
      ischecked: false
    }
    if (element !== ""){
      setToDos([...toDos,data])
    }
  }
  return (
    <div className="App  w-screen flex justify-center items-center h-screen">
     <div className='toDo text-center flex flex-col items-center w-3/4 h-2/4 bg-slate-300 rounded space-y-4'>
        <h1 className='antialiased text-3xl italic font-bold mt-8'>TO DO LIST</h1>
        <TodoAdd AddFunction={Add} />
        {toDos.length > 0 && toDos.map((todo) => <Content key={todo.id} item={todo}/>)}
        <ProgressBar />
        
     </div>
    </div>
  );
}

export default App;
