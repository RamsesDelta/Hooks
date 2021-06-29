import React, {useEffect,useState} from "react"
import { Message } from "./Message"
import './effects.css'

export const SimpleForm = () => {

    const[formState,setFormState] = useState({
        name: '',
        email: ''
    })

    const{name,email} = formState

    useEffect(()=>{
        //console.log('diapra useEffect')
    },[])

    useEffect(()=>{
       // console.log('cambia FormState')
    },[formState])

    useEffect(()=>{
       // console.log('email cambio')
    },[email])
    
    const handleInputChenge = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    return(
        <>
        <h1>useuEffect</h1>
        <hr/>
        <div className="form-group" >
            <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChenge}/> 
        </div>
   
   
        <div className="form-group" >
            <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={email} onChange={handleInputChenge}/> 
        </div>

        {(name === '1234' ) && <Message/>}

        </>
    )

}
