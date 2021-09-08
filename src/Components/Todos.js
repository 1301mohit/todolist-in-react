import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let todosStyle = {
        minHeight : "70vh",
        margin : "40px auto"
    }
    return (
        <div className="container" style={todosStyle}>
            <h3>Todo List</h3>
            <hr />
            {
                props.todos.length === 0 ? "No todos to display" :
                props.todos.map((todo) => {
                    return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>
                })
            }
        </div>
    )
}
