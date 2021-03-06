import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values,setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChenge = ({target}) =>{
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    return [values,handleInputChenge,reset]
}
