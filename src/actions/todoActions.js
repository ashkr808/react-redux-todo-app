import {ADD_TODO,MARK_TODO,DELETE_TODO} from './types'

export const addTodo= text=>{
    return{
        type: ADD_TODO,
        payload: text,
    }
}

export const markComplete = id=>{
    return{
        type: MARK_TODO,
        payload: id
    }
}

export const deleteTodo = id=>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}
