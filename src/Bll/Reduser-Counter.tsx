import {Dispatch} from "redux";

const initialState = {
    value: 0,

}


type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state,
                value: state.value + 1
            }
        case "SET-VALUE-LOCAL-STORAGE":
            return {
                ...state,
                value:state.value
            }
        case 'RESET':
            return (initialState )


        default:
            return state
    }

}


export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const)
export const resetAC  = () => ({type: 'RESET'} as const)


export type IncCounterActionType = ReturnType<typeof incValueAC>
export type SetValueFromType = ReturnType<typeof setValueFromLocalStorageAC>
export type SetMaxValueFromType = ReturnType<typeof resetAC>

export const incValuesTC = (value: number) => (dispatch : Dispatch) => {

    localStorage.setItem('counterValue', JSON.stringify(value))
    dispatch(incValueAC())
}



export const setValueFromLocalStorageTC = () => (dispatch : Dispatch) => {


    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString){
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueFromLocalStorageAC(newValue))

    }
}




export type UsersReducerActionsType = IncCounterActionType | SetValueFromType | SetMaxValueFromType
