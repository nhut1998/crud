import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { STATUS_FILTER } from '../const'

import { CHANGE_STATUS, CHECK_ALL,DELETE_COMPLETE } from '../../store/types/todo'


export default function Filter() {

    const stateList = useSelector(state=>state.todo.list)
    console.log(stateList)

    const couterItem =()=>{
        const couter = stateList.filter(item=>item.status===STATUS_FILTER.active)
        return couter.length
    }


    const dispatch = useDispatch()
    const onChangeStatus=status=>{
        const action ={
            type:CHANGE_STATUS,
            payload:STATUS_FILTER[status]
        }
        dispatch(action)
    }
    const onCheckAll=(status)=>{
        dispatch({
            type:CHECK_ALL,
            payload:status
       
        })

    }
  
    const deleteCoplete =(status)=>{
        dispatch({
            type:DELETE_COMPLETE,
            payload:status
        })

    }
   
    
    return (
        <div className='d-flex align-items-center justify-content-between'>
        <button className='btn btn-warning' onClick={()=>onChangeStatus(STATUS_FILTER.all)}>All</button>
        <button className='btn btn-danger' onClick={()=>onChangeStatus(STATUS_FILTER.active)}>Active</button>
        <button className='btn btn-success' onClick={()=>onChangeStatus(STATUS_FILTER.complete)}>Complete</button>
        <button className='btn btn-success' onClick={()=>onCheckAll()}>Check all</button>
        <button className='btn btn-success' onClick={()=>deleteCoplete()}>DEL_Complete</button>
        <span>item:{couterItem()}</span>
      
      </div>
    )
}
