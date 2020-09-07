import React from 'react';
import './Button.css';

const Button = ({text, green, red, large, onClick}) => {
    return (
        green || red ? (
            <button onClick={onClick && onClick} className={`${green && 'green-btn'} ${red && 'red-btn'} ${large && 'large-btn'} border-none py-2 px-5 font-semibold`}>{text ? text : 'Daftar'}</button>
        ) : (
            <button onClick={onClick && onClick} className={`orange-btn text-black border-none py-2 px-5 font-semibold`}>{text ? text : 'Selengkapnya'}</button>
        )
    )
}

export default Button
