import React,{useState, useRef} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import { Toast } from 'primereact/toast';

function Form({addTodo}) {
    let [text,setText] = useState('');
    const toast = useRef(null);

    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        if(text===''){
            toast.current.show([
                {severity:'warn', summary:'Message:', detail:'Please enter a text', life: 3000},
            ]);
          return;
        }
        addTodo(text);
        setText('');
        e.target.reset()
    }
    return (
        <form onSubmit={onSubmit} className="add-todo-form">
            <input autoComplete="off" name="text" onChange={onChange} type="text" placeholder="Enter text"/>
            <button className=""> <i className="fa fa-plus"></i> </button>
            <Toast ref={toast} />
        </form>
    )
}



export default  connect(null,{addTodo})(Form);
