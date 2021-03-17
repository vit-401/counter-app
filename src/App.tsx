import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterDisplay} from "./components/CounterDisplay/CounterDisplay";
import {CounterInnerBtn} from "./components/CounterInnerBtn/CounterInnerBtn";

export type handlersType = {
    incValue: () => void
    resetValue: () => void
    valueSettings?: boolean
    setValue?: () => void,
    setValueInSettings?: (x: number) => void
    setMaxValueInSettings?: (x: number) => void
}


function App() {
    let [value, setValue] = useState<number>(0);
    let [valueInSettings, setValueInSettings] = useState<any>({startValue: 0, maxValue: 5});
    let [valueSettings, setValueSettings] = useState<boolean>(false);
    let [error, setErrorValue] = useState<boolean>(false);

    useEffect(() => {
        let counterValue = localStorage.getItem('counterValue')
        if (counterValue) {
            let newValue = JSON.parse(counterValue)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        CheckingForErrors(value)
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value, valueInSettings.startValue, valueInSettings.maxValue])


    const handlers: handlersType = {

        incValue: () => {
            setValue(value = value + 1)
            CheckingForErrors(value)

        },
        resetValue: () => {
            setValue(0)
            setErrorValue(false)
        },
        setValue: () => {
            setValueSettings(!valueSettings)
        },
        setValueInSettings: (x) => {
            setValueInSettings({...valueInSettings, startValue: x})
            setValue(value = x)
            CheckingForErrors(x)
        },
        setMaxValueInSettings: (x) => {
            setValueInSettings({...valueInSettings, maxValue: x})
            // CheckingForErrors(x)
        },
    }

    let CheckingForErrors = (x: number) => {
        if (x >= valueInSettings.maxValue) {
            setErrorValue(true)
            setValue(valueInSettings.maxValue)
        } else {
            setErrorValue(false)
        }
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
