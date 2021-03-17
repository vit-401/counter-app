import React from "react";
import './CounterDisplay.css'
import {InnerCounterSetValue} from "../InnerCounterSetValue/InnerCounterSetValue";
import {CounterNumber} from "../CounterNumber/CounterNumber";

export function CounterDisplay(props: any) {
    return <div className="counterDisplay">
        {props.valueSettings
            ? <InnerCounterSetValue
                error={props.error}
                setMaxValueInSettings={props.setMaxValueInSettings}
                setValueInSettings={props.setValueInSettings}
                value={props.valueInSettings}/>
            : <CounterNumber error={props.error} value={props.value}/>}
    </div>;
}