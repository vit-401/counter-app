import React from "react";
import './CounterInnerBtn.css'
import {CounterBtn} from "../CounterBtn/CounterBtn";


export const CounterInnerBtn = (props: any) => {
    if (props.valueSettings) {

    }
    const returnBtns = () => {
        return <>
            <CounterBtn error={props.error} handler={props.handlers.incValue} title={'inc'}/>
            <CounterBtn  handler={props.handlers.resetValue} title={'reset'}/>
        </>
    }
    return <div className="counterInnerBtn">
        {!props.valueSettings ? returnBtns() : null}
        <CounterBtn error={props.error}
                    valueSettings={props.valueSettings}
                    setValueInSettings={props.handlers.setValueInSettings}
                    handler={props.handlers.setValue}
                    title={'set'}/>
    </div>;
}