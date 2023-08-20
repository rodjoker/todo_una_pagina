
import { useState } from 'react';
import './App.css'

function App() {

 
  

const lista = [
   
  {
    id: 0,
    tarea: "Estudiar Hooks",
    description: "",
    complete: false
  },
  {
    id: 1,
    tarea: "Estudiar Funcion Asincrona",
    description: "",
    complete: false
  }, 
  {
    id: 3,
    tarea: "Clase de ingles",
    description: "",
    complete: false
  },
]
const [value, setValue] = useState ("");
const [listaTask, setListaTask] = useState (lista);

function handleAddTask(){
    
  const newTarea = {
    id: Date.now(),
    tarea : value,
    description: "",
    completed: false
    }

    setListaTask([...listaTask, newTarea]);
  }

  return (
    <div className='contenedor'>
      <h1>TASK MASTER</h1>
      <input 
      type='text' 
      placeholder='add task' 
      onChange={(event)=>
            {setValue(event.target.value)}} />
    
            <button onClick={handleAddTask}>add</button>   

      {localStorage.setItem(value, event.target.value)} 
      
      <p todos = {lista}/>
      {
      listaTask.map((todo, index) => {
        return(
          <p 
          key={todo.id}>
          {index.id}
          {todo.tarea}
          </p>
      )} )
      
     }
        
    </div>
  )
}

export default App
