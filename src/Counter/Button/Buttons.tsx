import React from 'react';
import '../../App.css'



export type CounterPropsButtons = {
    incMender: () => void
    reset: () => void
    maxValue: number
    value: number
}


export function Buttons(props: CounterPropsButtons) {


    return (
        <div className={'container'}>
            <div className={"displayStyles"}>
                <div className={"displayStyle"}>

                    <span className={props.value === 5 ? "stopCounterStyle" : "counterStyle"}>{props.value} </span>
                </div>
                <div className={"butTonStyle"}>
                    <button disabled={props.value === props.maxValue} className={"butIncr"}
                            onClick={props.incMender}>Inc
                    </button>

                    <button className={"butRes"} onClick={() => (props.reset())}>Reset</button>


                </div>
            </div>

        </div>
    )


}
