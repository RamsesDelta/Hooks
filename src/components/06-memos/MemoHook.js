import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter,increment} = useCounter(10)
    const [show,setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter),[counter])


    return (
        <div>
            <h1>MemoHook</h1>
           <h1>Counter: <small>{counter} </small></h1> 
           <hr/>
           <p>{memoProcesoPesado}</p>
           <button className="btn btn-primary" onClick={increment}>
               +1
           </button>
           <button className="btn btn-primary" onClick={()=>{
               setShow(!show)
           }}>
               show/Hide{JSON.stringify(show)}
           </button>
        </div>
    )
}
