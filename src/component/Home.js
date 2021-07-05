import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function Home({todos}) {
    console.log(todos)
    return (
        <Fragment>
                    <div className="container">
                <Header></Header>
                <Body markComplete={this.markComplete}   deleteTodo={this.deleteTodo} addTodo={this.addTodo} todos={todos}></Body>
                <Footer todos={todos}></Footer>
            </div>
            <Link className="link" to="/about">About</Link>
        </Fragment>
    )
}
export default Home;
