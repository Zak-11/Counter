import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./Reduser-Counter";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})



export const store = createStore( rootReducer, applyMiddleware(thunk))
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>



