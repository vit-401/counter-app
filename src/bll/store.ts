import {combineReducers, createStore} from "redux";
import {counterReduser} from "./counter-reduser";
import {loadState, saveState} from "./localStorage";

const rootRedusers = combineReducers({
    counter: counterReduser
})

export let store = createStore(rootRedusers, loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export type AppStateType = ReturnType<typeof rootRedusers>
export type AppStoreType = typeof store