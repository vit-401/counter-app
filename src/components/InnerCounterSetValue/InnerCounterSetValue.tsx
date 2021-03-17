import React from "react";
import './InnerCounterSetValue.css'
import {CounterSetValue} from "../CounterSetValue/CounterSetValue";

export function InnerCounterSetValue(props: any) {
    return <div className={'innerCounterSetValue'}>
        <CounterSetValue error={props.error} setValueInSettings={props.setMaxValueInSettings}  value={props.value.maxValue} title={'max value'}/>
        <CounterSetValue error={props.error} setValueInSettings={props.setValueInSettings}  value={props.value.startValue} title={'start value'}/>
    </div>;
}