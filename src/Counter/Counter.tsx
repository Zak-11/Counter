import React from 'react';
import '../App.css'
import {Buttons} from "./Button/Buttons";


export type propsType = {
    value: number
    incMender: () => void
    reset: () => void
    maxValue: number
}

export function Counter(props: propsType) {


    return (


        <Buttons

                 reset={props.reset}
                 maxValue={props.maxValue}
                 value={props.value}
                 incMender={props.incMender}/>

    )
}
