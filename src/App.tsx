import React, {useEffect,} from 'react';
import {Counter} from "./Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Bll/Store";
import {incValuesTC, resetAC, setValueFromLocalStorageTC} from "./Bll/Reduser-Counter";


export function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
    },[])


    const incMender = () => {
        dispatch(incValuesTC(value + 1))
    }

    const reset = () => {
        dispatch(resetAC())
    }
    let maxValue = 5


    return (

        <Counter
            value={value}
            maxValue={maxValue}
            incMender={incMender}
            reset={reset}/>
    )
}


