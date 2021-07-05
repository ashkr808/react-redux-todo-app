import React,{useRef} from 'react'
import { connect } from 'react-redux'
import {deleteTodo, markComplete} from '../actions/todoActions'
import {confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

function Todo({todo,markComplete, deleteTodo}){
    const toast = useRef(null);

    function onChange(){
        markComplete(todo.id)
    }
    
    const acceptFunc = ()=>{
        deleteTodo(todo.id)
        toast.current.show({severity:'warn', summary: 'Message', detail:'Todo Deleted', life: 3000});
    }  
    const rejectFunc = ()=>{
        toast.current.show({severity:'success', summary: 'Message', detail:'Todo is safe', life: 3000});
    }
    const onClick=()=>{
        confirmDialog({
            message: 'Are you sure you want to delete?',
            header: 'Confirmation',
            accept: acceptFunc,
            reject: rejectFunc
        });
    }
    return (
        <div className="todo">
            <Toast ref={toast} />
            <div className="check-area">
                <input onChange={onChange} type="checkbox" checked={todo.isCompleted}/>
                <p completed={todo.isCompleted ? 'true' : 'false'}>{todo.title} </p>
            </div>
            <div className="check-area">
            <i className="fa fa-trash-o" onClick={onClick}></i>
            </div>
        </div>
    )
}

const mapStatesToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStatesToProps,{deleteTodo, markComplete})(Todo);
