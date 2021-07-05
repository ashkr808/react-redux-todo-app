import React from 'react'
import { connect } from 'react-redux'

function Footer({todos}) {
    let completed = 0;
    let open = 0;
    todos.forEach(todo => {
        if(todo.isCompleted)
            completed++;
        if(!todo.isCompleted)
            open++;
    });
    return (
        <div className="footer">
            <span>{todos.length} {(todos.length===1 || todos.length===0) ? 'todo' : 'todos'}</span>
            <span>{completed} completed</span>
            <span>{open} open</span>
        </div>
    )
}

const mapStatesToProps = state => ({
    todos: state.todos.todos
})

export default  connect(mapStatesToProps)(Footer);