import React, { useState } from 'react'
import Todolist from './Todolist'
import '../css/Todo.css'

export default function Funtional() {
    const [todotex, setTodotext] = useState('')
    const [list, setList] = useState([])
    const [listFilter, setFilter] = useState('All')
    const [checkAll, setCheckAll]=useState(true)
   
    const handleChangeInput = (event) => {
        setTodotext(event.target.value)

    }
    const detelet = (id) => {
        setList(list.filter(item => item.id !== id))

    }
    const delCompleted =()=>{
        setList(list.filter(item=>item.isCompleted !== true))
    }
    const editTodo = (id, todotext) => {
        const idxFound = list.findIndex(item => item.id === id)
        // if(~idxFound){
        //     setList([...list, {...list[idxFound]}])
        // }
        if (~idxFound) {
            const listClone = [...list]
            listClone[idxFound].content = todotext
            setList(listClone)
        }

    }
    const couterNumber=()=>{

        const couter = list.filter(item=>!item.isCompleted)
        return couter.length
    }

    const checkTodo = (id) => {
        setList(list.map(item => item.id === id ? ({ ...item, isCompleted: !item.isCompleted }) : item)
        )

    }
    const checkAllList = () => {
        const cloneList=[...list]
        cloneList.forEach(item=>{
            item.isCompleted = !checkAll
        })
        setList(cloneList)
        setCheckAll(!checkAll)
        console.log(typeof  !checkAll)

    }
   

    const addNewTodo = event => {
        if (event.keyCode === 13 && todotex.trim()) {
            const newApp = {
                id: Date.now(),
                content: todotex,
                isCompleted: false
            }
            //   setList(pre=>[...pre, newApp])
            setList([...list, newApp])
            setTodotext('')
            



        }
    }

    
    return (
        <div className='text-center display-4 mb-5'>

            <div className='w-25 mx-auto'>
                <input className='form-control mb-3'
                    onChange={event => handleChangeInput(event)} value={todotex}
                    onKeyDown={event => addNewTodo(event)}
                />
                {
                    list.reduce((arrFilter, item) => {
                        const todoItem = (
                            <Todolist key={item.id}  data={item}

                                detelet={(id) => detelet(id)} 
                                onEdit={(id, todotex) => editTodo(id, todotex)} 
                                checkTodo={checkTodo} />
                        )
                        if (listFilter === 'All' || listFilter === item.isCompleted) {
                            arrFilter.push(todoItem)
                        }
                        return arrFilter

                    }, [])
                }
            </div>
            <button className='btn btn-primary' onClick={() => setFilter('All')}>All</button>
            <button  className='btn btn-secondary'  onClick={() => setFilter(false)}>Active</button>
            <button className='btn btn-info' onClick={() => setFilter(true)}>Completed</button>
            <button className='btn btn-warning' onClick={() => checkAllList()}>Check All</button>
            <button className='btn btn-dark' onClick={() => delCompleted()}>clearCompleted</button>
            <div>item:{couterNumber()}</div>
          
        </div>
    )
}
