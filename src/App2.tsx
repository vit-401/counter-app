import React, {useEffect, useState} from 'react';
import './App2.css'

function App2() {
    let [date, setDate] = useState(new Date)
    let seconds: any = date.getSeconds() / 60
    let minutest: any = date.getMinutes() / 60
    let hours: any = date.getHours() / 12

    const setTimeWithZero = (time: number) => time < 10 ? "0" + time : time

    useEffect(() => {
        const internalId: any = setInterval(() => {
            setDate(new Date)

            document.getElementsByClassName('second')
            return () => {
                clearInterval(internalId)
            }
        }, 1000)
    }, [])
    let styleForSeconds = (time: number) => ({
        transform: `rotate(${time * 360}deg)`
    })

    return (
        <div>
            {setTimeWithZero(hours * 12)}:
            {setTimeWithZero(minutest * 60)}:
            {setTimeWithZero(seconds * 60)}
            <div className="clock-box">
                <div className="clock">
                    <div className="number number-1">1</div>
                    <div className="number number-2">2</div>
                    <div className="number number-3">3</div>
                    <div className="number number-4">4</div>
                    <div className="number number-5">5</div>
                    <div className="number number-6">6</div>
                    <div className="number number-7">7</div>
                    <div className="number number-8">8</div>
                    <div className="number number-9">9</div>
                    <div className="number number-10">10</div>
                    <div className="number number-11">11</div>
                    <div className="number number-12">12</div>

                    <div className="hands second" style={styleForSeconds(seconds)} second-hand/>
                    <div className="hands minute" style={styleForSeconds(minutest)} minute-hand/>
                    <div className="hands hour" style={styleForSeconds(hours)} hour-hand/>
                    <div className="circle"/>

                </div>
            </div>
        </div>
    )

}

export default App2;
