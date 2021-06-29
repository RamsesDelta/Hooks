import { useState,useEffect,useRef } from "react"


export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    
    const [state,setSate] = useState({data:null, loading:true, error:null})

    useEffect(()=>{
        return () =>{
            isMounted.current = false;
        }
    },[])


    useEffect(()=>{

        setSate({data:null, loading:true, error:null})

        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if(isMounted.current){
                setSate({
                    loading:false,
                    error:null,
                    data
                })
            }
        })
    },[url])
    return state;
}