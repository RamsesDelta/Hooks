import React from "react"
import './effects.css'
import { useForm } from "../../hooks/useForm"

export const FormWithCustomHook = () => {

    const[formValues,handleInputChenge] = useForm({
        name: '',
        email: '',
        password:''
    })

    const{name,email, password} = formValues
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className="form-group" >
            <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChenge}/> 
        </div>

   
        <div className="form-group" >
            <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={email} onChange={handleInputChenge}/> 
        </div>

        <div className="form-group" >
            <input type="password" name="password" className="form-control" placeholder="*****" value={password} onChange={handleInputChenge}/> 
        </div>

        <button type="submit" className="btn btn-primary" >Guardar</button>

        </form>
    )

}