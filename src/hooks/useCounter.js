import {useState} from 'react'

export const useCounter = (initialState = 10) => {

  //  const [state, setState] = useState(initialState)

  const [counter, setState] = useState(initialState)

    const reset = () =>{
        setState(initialState)
    }

    const increment = () =>{
        setState(counter + 1)
    }

    const decrement = () =>{
        setState(counter - 1)
    }
   /* const increment = (factor = 1) =>{
        setState(state + factor)
    }

    const decrement = (factor = 1) =>{
        setState(state - factor)
    }
*/
    return {
        //state,
        counter,
        increment,
        decrement,
        reset
    }
}
