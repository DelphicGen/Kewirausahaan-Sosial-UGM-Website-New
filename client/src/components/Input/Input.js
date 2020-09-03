import React from 'react';
import './Input.css';

const Input = ({name, textarea}) => {
    return (
        <div className="input flex flex-col items-start mb-8 relative w-full">
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.substring(1)}:</label>
            {
                textarea ? (
                    <textarea name={name} className="input__bar  focus:outline-none p-2 w-full" id={name}></textarea>
                ) : (
                    <input name={name} className="input__bar focus:outline-none p-2 w-full" id={name} />
                )
            }
            <div className="input__after w-full"></div>
        </div>
    )
}

export default Input
