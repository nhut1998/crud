import React, { useState,useRef,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { CHECK_TODO, DELETE_TODO, EDIT_TODO } from '../../store/types/todo'
import { STATUS_FILTER } from '../const'
import '../../../src/Functional/css/Todo.css'

export default function TodoItem({ data }) { 
  console.log(data)
  
  

  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState('')

  const contentData = useRef()

  const dispatch = useDispatch()
  

  const CHECKED ={
    [STATUS_FILTER.active]:false,
    [STATUS_FILTER.complete]:true
  }

  useEffect(() => {
    if (isEdit) contentData.current.focus()
  }, [isEdit]) 

  useEffect(() => {
    if (data.content) setText(data.content)
  }, [data.content])

  const onSubmit = () => {
    setIsEdit(false)
    editTodo(data.id, text)
  }
  

  const onEnterInput = event => {
    if (event.keyCode === 13) onSubmit()
  }
  const onCheck = event => {
    dispatch({
      type:CHECK_TODO,
      payload:{
        id:data.id,
        status:event.target.checked ? STATUS_FILTER.complete:STATUS_FILTER.active
      }
    })

  }
  const onDelete =()=>{
    dispatch({
      type:DELETE_TODO,
      payload:{
      
        id:data.id
      }
        
      
    })
  }
  const editTodo =(id,todotext)=>{
    dispatch({
      type:EDIT_TODO,
      payload:{
        id:id,
        todotext:todotext
      }
    })
  }
  // const onchange=(e)=>{
  //   setText(e.target.value)
    
  //   console.log(e.target.value)
  // }

  return (
    <div className={`d-flex align-items-center justify-content-between border p-2 ${CHECKED[data.status] ? 'completed' :''}`}>
      <input type='checkbox'checked={CHECKED[data.status]} onChange={onCheck}/>
      {
        isEdit
          ? <input
            ref={contentData}
           value={data.content}
            onChange={e => editTodo(data.id, e.target.value)}
          //  onChange={(e)=>onchange(e)}
            onBlur={()=>setIsEdit(false)}
            onKeyDown={onEnterInput}
            className='form-control mx-2'
          />
          : <span
            className='w-100 mx-3 '
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => setIsEdit(true)}>
            
            {data.content}
          </span>
      }
      <button className='btn btn-danger' onClick={onDelete}>X</button>
    </div>
  )
}
