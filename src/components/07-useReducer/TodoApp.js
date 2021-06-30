import React, { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer"
import { useForm } from "../../hooks/useForm"
import './syteles.css'


const init = () =>{
    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]
}

export const TodoApp = () => {

    const [todos,dispath] = useReducer(todoReducer,[],init)

    const [{description},handleInputChange,reset] = useForm({
        description:''
    })


    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    console.log(description)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(description.trim().length <= 1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispath(action)
        reset()
    }

    return(
        <div>
            <h1>Todo App</h1>
            <hr/>
            <div className="col-7">
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo,i)=>(
                        <li key={todo.id} className="list-group-item">
                            <p className="text-center">{i+1}. {todo.desc}</p>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                        name="description"
                        className="form-control"
                        placeholder="Aprender ...."
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                    />
                    <button type="submit"  className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
                </form>
            </div>
        </div>
    )
}