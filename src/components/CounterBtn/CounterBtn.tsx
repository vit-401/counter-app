import React from "react";
import './CounterBtn.css'

type propsType = {
    title: string
    handler: () => void
    setValueInSettings?: (x: number) => void
}

export const CounterBtn: React.FC<any> = (props) => {
    const onClickBtn = () => {
        props.handler()
    }
    return <button
        disabled={props.error}
        className={ props.error ? "counterBtn disable": "counterBtn"}
        onClick={onClickBtn}
    >{props.title}</button>;
}