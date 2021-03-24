import React from 'react';
import './App.css';
import {CounterDisplay} from "./components/CounterDisplay/CounterDisplay";
import {CounterInnerBtn} from "./components/CounterInnerBtn/CounterInnerBtn";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    changeValueAC,
    checkingForErrorsAC,
    resetValueeAC,
    setErrorAC, setMaxValueInSettingsAC,
    setValueInSettingsAC,
    setValueSettingsAC
} from "./bll/counter-reduser";



function App() {

    let value = useSelector<AppStateType>(store => store.counter.value)
    let error = useSelector<AppStateType>(store => store.counter.error)
    let valueSettings = useSelector<AppStateType>(store => store.counter.valueSettings)
    let valueInSettings = useSelector<AppStateType>(store => store.counter.valueInSettings)

    const dispatch = useDispatch()

    const handlers: any = {
        incValue: () => {
            dispatch(changeValueAC())
        },
        resetValue: () => {
            dispatch(resetValueeAC())
            dispatch(setErrorAC(false))

        },
        setValue: () => {
            dispatch(setValueSettingsAC())
        },
        setValueInSettings: (x: number) => {
            dispatch(setValueInSettingsAC(x))
            dispatch(checkingForErrorsAC(x))
        },
        setMaxValueInSettings: (x: number) => {
            dispatch(checkingForErrorsAC(x))
            dispatch(setMaxValueInSettingsAC(x))

        },
    }


    return (
        <div className={'counter'}>
            <CounterDisplay error={error}
                            value={value}
                            valueSettings={valueSettings}
                            valueInSettings={valueInSettings}
                            setValueInSettings={handlers.setValueInSettings}
                            setMaxValueInSettings={handlers.setMaxValueInSettings}/>
            <CounterInnerBtn error={error}
                             handlers={handlers}
                             valueSettings={valueSettings}/>
        </div>
    )

}

export default App;
