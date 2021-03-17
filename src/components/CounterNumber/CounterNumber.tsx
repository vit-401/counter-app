import React from "react";
import './CounterNumber.css'

export function CounterNumber(props: any) {
    return <div className={props.error ? "counterNumber red": "counterNumber"}>{props.value}</div>;
}