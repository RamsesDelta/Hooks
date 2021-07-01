import React, { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer"
import { useForm } from "../../hooks/useForm"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import './syteles.css'


const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || []

    /*return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]*/
}

export const TodoApp = () => {

    const [todos,dispath] = useReducer(todoReducer,[],init)

    


    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) =>{
        
        const action = {
            type:'delete',
            payload:todoId
        }
        dispath(action)
    }


    const hangleToggle = (todoId) => {
        dispath({
            type: 'toggle',
            payload: todoId
        })
    }
    
    const handleAddToo = (newTodo) =>{
        dispath({
            type: 'add',
            payload: newTodo
        })
    }


    return(
        <div>
            <h1>Todo App</h1>
            <hr/>
            <div className="col-7">
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={hangleToggle} />
            </div>
            <div className="col-5">
                <TodoAdd handleAddToo={handleAddToo}/>
            </div>
        </div>
    )
}