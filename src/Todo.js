import React from 'react'
import {db} from "./firebase_config"
import { updateDoc, doc, deleteDoc } from "firebase/firestore"; 

const Todo = ({todo, progress, id}) => {
  const toggleProgress = async() => {
    const taskDocRef = doc(db, 'todos', id)
    try{
      await updateDoc(taskDocRef, {
        progress: !progress
      })
    } catch (err) {
      alert(err)
    }   
  }

  const handleDelete = async () => {
    const taskDocRef = doc(db, 'todos', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='flex border-b py-4'>
        <div className='grow'>
            <p className='text-xl font-bold'>{todo}</p>
            <p className='text-sm text-gray-500 '>{progress? "In-Progress" : "completed"}</p>
        </div>
        <button className={` text-black py-2 px-4 mr-2 rounded-lg `} onClick = {toggleProgress}>{progress?"DONE":"UNDONE"}</button>
        <button className='text-black py-2 px-4 mr-2 rounded-lg' onClick={handleDelete}>X</button>
    </div>
  )
}

export default Todo