import React, {useEffect, useState} from 'react';
import {Counter} from "./Counter/Counter";



export function App() {

    let maxValue = 5

    const [value, setValue] = useState(0)

   useEffect(() => {

       let valueAsString = localStorage.getItem('counterValue')
       if (valueAsString){
           let newValue = JSON.parse(valueAsString)
           setValue(newValue)
       }
    },[])


    useEffect(() =>{
        localStorage.setItem('counterValue', JSON.stringify(value))


    })




    let increment = () => {

        if (maxValue === value) {
            return
        }
        setValue( value + 1)
    }

    const resetCount = () => setValue(0)


    return (

        <Counter increment={increment}
                 value={value}
                 resetCount={resetCount}
                 maxValue={maxValue}
        />

    )


}


