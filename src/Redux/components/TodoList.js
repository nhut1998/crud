import React from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import { STATUS_FILTER } from '../const'

function TodoList({ list,status}) {
  console.log(list)
  
  
    return list.map(item => {
      if(status ===STATUS_FILTER.all|| status === item.status){

        return(
  
          <TodoItem
            key={item.id}
            data={item}
            
          />
        )
      }
      return null

    })
}
const mapStateToProps = state=>{
  
  return{
    list:state.todo.list,
    status:state.todo.status,
   
  }
}
export default connect(mapStateToProps)(TodoList)
TodoList.defaultProps={
    list:[]
}
