import React from 'react';
import '../../App.css'


export type CounterPropsButtons = {
    increment: () => void
    resetCount: () => void
    maxValue: number
    count: number
}


export function Buttons(props:CounterPropsButtons) {


    return (
        <div className={"displayStyles"}>
        <div className={"displayStyle"}>

                <span className={props.count === 5 ? "stopCounterStyle"  : "counterStyle"}>{props.count} </span>
            </div>
          <div className={"butTonStyle"}>
            <button disabled={props.count === props.maxValue} className={"butIncr"} onClick={props.increment}>inc</button>


            <button disabled={props.count === 0} className={"butRes"} onClick={props.resetCount}>reset</button>

          </div>
</div>
    )


}
