import React, {useEffect, useState} from 'react';
import {Counter} from "./Counter/Counter";



export function App() {



    let maxValue = 5

    const [count, setCount] = useState(0)

   useEffect(() => {

       let valueAsString = localStorage.getItem('counterValue')
       if (valueAsString){
           let newValue = JSON.parse(valueAsString)
           setCount(newValue)
       }
    },[])


    useEffect(() =>{
        localStorage.setItem('counterValue', JSON.stringify(count))


    })




    let increment = () => {

        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    const resetCount = () => setCount(0)


    return (

        <Counter increment={increment}
                 count={count}
                 resetCount={resetCount}
                 maxValue={maxValue}
        />

    )


}


