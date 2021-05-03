import React from 'react';
import '../App.css'
import {Buttons} from "./Button/Buttons";


export type propsType = {
    count: number
    increment: () => void
    resetCount: () => void
    maxValue: number
}
export function Counter ( props: propsType){



    return (


            <Buttons   increment={props.increment}
                                resetCount={props.resetCount}
                                maxValue={props.maxValue}
                                count={props.count}
                     />

    )
}
