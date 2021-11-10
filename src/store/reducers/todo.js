import { STATUS_FILTER } from "../../Redux/const"
import { ADD_TODO, CHANGE_STATUS, CHECK_TODO, DELETE_TODO, CHECK_ALL, EDIT_TODO, DELETE_COMPLETE } from "../types/todo"
const initialState = {

    list: [],
    status: STATUS_FILTER.all,
    checkall: false
}

export default function todoReducer(state = initialState, { type, payload }) {
    console.log(payload)
    switch (type) {
        case ADD_TODO:
            // console.log(payload)
            // const listClone = [...state.list]
            // listClone.push(payload)
            // state.list=listClone
            //  return {...list, list:listClone};
            const listClone = [...state.list]
            if (!listClone.some(item => item.content === payload.content)) listClone.push(payload)
            // return {...state, list:[...state.list,payload]}
            return { ...state, list: listClone }

        case CHANGE_STATUS: {
            return {
                ...state, status: payload
            }
        }
        case CHECK_TODO: {
            const listClone = [...state.list]
            const idxFound = listClone.findIndex(item => item.id === payload.id)
            listClone[idxFound].status = payload
            return {
                ...state, list: listClone
            }
        }

        case DELETE_TODO: {

            return { ...state, list: state.list.filter(item => item.id !== payload.id) }
        }
        case CHECK_ALL: {
            const listClone = [...state.list]
            listClone.forEach(item => item.status = !payload.checkall

            )
            return { ...state, list: listClone, checkall: !payload.checkall }

        }
        case EDIT_TODO: {
            const listClone = [...state.list]
            const idxFound = listClone.findIndex(item => item.id === payload.id)

            listClone[idxFound].content = payload.todotext

            return {
                ...state, list: listClone
            }
        }
        case DELETE_COMPLETE: {
            return { ...state, list: state.list.filter(item => item.status !== STATUS_FILTER.complete) }
        }
       
        default:
            return state;

    }

}