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
                value: action.value
            }

        default:
            return state
    }

}


export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const SetValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const)

export type CounterActionType = ReturnType<typeof incValueAC>
export type SetValueFromType = ReturnType<typeof SetValueFromLocalStorageAC>

export type UsersReducerActionsType = CounterActionType | SetValueFromType
