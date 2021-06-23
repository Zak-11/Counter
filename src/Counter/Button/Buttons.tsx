import React from 'react';
import '../../App.css'
import {useDispatch} from "react-redux";


export type CounterPropsButtons = {
    incMender: () => void
    reset: () => void
    maxValue: number
    value: number
}


export function Buttons(props: CounterPropsButtons) {
    const dispatch = useDispatch()

    return (
        <div className={'container'}>
        <div className={"displayStyles"}>
            <div className={"displayStyle"}>

                <span className={props.value === 5 ? "stopCounterStyle" : "counterStyle"}>{props.value} </span>
            </div>
            <div className={"butTonStyle"}>
                <button disabled={props.value === props.maxValue} className={"butIncr"} onClick={props.incMender}>inc
                </button>

                <button className={"butRes"} onClick={() => dispatch(props.reset())}>Reset</button>
       {/* <button disabled={props.value === 0} className={"butRes"} onClick={props.resetCount}>reset</button>*/}

            </div>
        </div>

</div>
    )


}
