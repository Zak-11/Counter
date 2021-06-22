import React from 'react';
import '../../App.css'


export type CounterPropsButtons = {
    increment: () => void
    resetCount: () => void
    maxValue: number
    value: number
}


export function Buttons(props:CounterPropsButtons) {


    return (
        <div className={"displayStyles"}>
        <div className={"displayStyle"}>

                <span className={props.value === 5 ? "stopCounterStyle"  : "counterStyle"}>{props.value} </span>
            </div>
          <div className={"butTonStyle"}>
            <button disabled={props.value === props.maxValue} className={"butIncr"} onClick={props.increment}>inc</button>


            <button disabled={props.value === 0} className={"butRes"} onClick={props.resetCount}>reset</button>

          </div>
</div>
    )


}
