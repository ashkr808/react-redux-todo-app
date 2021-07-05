import React from 'react'
import Todo from './Todo';
import { connect } from 'react-redux'


 function Todos({todos}) {

    
    if((todos.length === 0)){
        return <p className="caught-up">You're all caught up!</p>;
    }
    return (
        <div className="todos">
            {todos.map(todo=> <Todo todo={todo} key={todo.id}></Todo> )}
        </div>
    )
}

const mapStatesToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStatesToProps)(Todos);
