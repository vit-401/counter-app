import React, {useEffect, useState} from 'react';
import axios from "axios";


function AppForeNodeJs() {

    let [inputValue, setinputValue] = useState('')
    let [users, setUsers] = useState([])
    let getUsers = () => {
        axios.get('http://localhost:4000/users')
            .then((res) => {
                setUsers(res.data)
            })
    }


    useEffect(() => {
        getUsers()
    }, [])

    let createUsers = () => {
        axios.post('http://localhost:4000/users', {name: inputValue})
            .then((res) => {
                getUsers()
            })
        setinputValue('')
    }
    const changeInputValue = (e: any) => {
        setinputValue(e.currentTarget.value)
    }

    return (
        <div style={{color: '#fff'}}>
            <input type="text" onChange={changeInputValue} value={inputValue}/>
            <button onClick={createUsers}>ADd User</button>
            {
                users.length !== 0 ? users.map((u: any, index: number) => <div key={index}>name: {u.name}</div>) :
                    <div>Данные отсутствуют</div>
            }

        </div>
    )

}

export default AppForeNodeJs;
