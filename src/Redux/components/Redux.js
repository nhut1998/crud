import React from 'react'
import InputAdd from './InputAdd'
import TodoList from './TodoList'
import Filter from './Filter'




export default function Functional() {
  

  return (
    <>
      <div className='text-center display-4 mb-5'>Todolist Functional</div>
      <div className='w-25 mx-auto'>
        <InputAdd
       
        
        />
        <TodoList
       
        />
        <Filter/>
        
      </div>
    </>
  )
}

