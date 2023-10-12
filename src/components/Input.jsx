import React, { useState } from "react";
import './Input.css';

export function Input({ setName, setSurname }) {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    return (
        <div>
            <input
                className='input'
                placeholder="First name"
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value);
                    setName(event.target.value); 
                }}
            />
            <input
                className='input'
                placeholder="Surname"
                value={secondName}
                onChange={(event) => {
                    setSecondName(event.target.value);
                    setSurname(event.target.value); 
                }}
            />
        </div>
    )
}