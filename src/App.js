import './App.css';
import { useEffect, useState } from 'react';
import {db} from "./firebase_config"
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore"; 
import Todo from './Todo';


function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => { 
   getTodos(); 
  }, [todos])

  const getTodos = async() => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    
    let todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id:doc.id})
      })
      setTodos(todosArray);
  }
  const addTodo = async (e) => {
    e.preventDefault();
    console.log(todoInput);

    try {
      await addDoc(collection(db, "todos"), {
        todo: todoInput,
        progress: true,
        timestamp: serverTimestamp(),
      });
      setTodoInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  return (
    <div className="">
      <div className='mt-20 w-1/3 mx-auto'>
        <h1 className="text-3xl mb-8">
          ANKIT'S Todo App
        </h1>

        <form className='mb-4'>
          <label htmlFor="input" className
          text-xs>Write a Todo</label> <br /> 
          <input onChange={(e) => setTodoInput(e.target.value)} value={todoInput} type="text" id="input" className='border outline-none w-[300px] py-2 px-4 mr-2 mt-2 rounded-lg'/>
          <button type='submit' onClick={(e) => addTodo(e)} className='bg-gray-500 text-white py-2 px-4 rounded-lg'>Add Todo</button>
        </form>
          {todos?.map((todo) => (
              <Todo todo={todo.todo} progress={todo.progress} id={todo.id} />
          ))}
      </div>
    </div>
  );
}

export default App;
