import React, {useState} from 'react';
import {Counter} from "./Counter/Counter";



export function App() {
    let maxValue = 5

    const [count, setCount] = useState(0)

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


