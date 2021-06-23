import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./Reduser-Counter";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


/*
store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
})
*/


export type AppStoreType = typeof store




