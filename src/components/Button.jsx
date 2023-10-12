import React from "react";
import './Button.css'

export function Button({name, surname}) {
    
    const handleSubmit = () => {
        alert(`${name} ${surname}`)
    }
    return (
        <div>
            <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}