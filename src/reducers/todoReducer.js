import {ADD_TODO,MARK_TODO,DELETE_TODO} from '../actions/types'
import {v4} from 'uuid'
const initialState = {
    todos: []
}
export default (state = initialState,action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, {
                    "id": v4(),
                    "title": action.payload,
                    "isCompleted": false,
                  }]
            }
        case MARK_TODO:
            return{
                ...state,
                todos: state.todos.map(todo=>{
                    if(todo.id !== action.payload)
                        return todo
                    else{
                        todo.isCompleted = !todo.isCompleted
                        return todo
                    }
                })
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.payload)
            }
        default:
            return state
    }
}