import React from "react";
import './CounterSetValue.css'

export function CounterSetValue(props: any) {
    const getValue = (e: any) => {
        props.setValueInSettings(Number(e.currentTarget.value))
    }
    return <div>
        <label className="counterSetValue">{props.title}</label>
        <input className={props.error ? 'inputValue red': 'inputValue'} type="number" value={props.value} onChange={getValue}/>
    </div>;
}