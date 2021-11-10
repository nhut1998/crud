import React, { useState, useRef, useEffect } from 'react'

export default function Todolist({ data, detelet, onEdit, checkTodo }) {
    console.log(data)

    const [isEdit, setEdit] = useState(false)
    // const editTodo=()=>{

    // }
    const contentData = useRef()

    useEffect(() => {
        if (isEdit) contentData.current.focus()

    }, [isEdit])
    return (
        <div className={`d-flex align-item justify-content-between border p-2 checkTodo ${data.isCompleted ? 'completed' : ''} `}>
            <input type='checkbox' onClick={() => checkTodo(data.id)} checked={data.isCompleted}></input>
            {isEdit ?
                <input value={data.content} ref={contentData}
                    onChange={(e) => onEdit(data.id, e.target.value)} type='text'
                    onBlur={() => setEdit(false)} className='from-control w-50 '></input> :


                <span style={{ cursor: 'pointer' }} onDoubleClick={() => setEdit(true)}>{data.content}</span>
            }
            <button className='btn btn-danger' onClick={() => detelet(data.id)}>X</button>
        </div>
    )
}
