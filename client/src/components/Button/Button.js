import React from 'react';
import './Button.css';

const Button = ({register, large}) => {
    return (
        register ? (
            <button className={`registerBtn ${large && 'large-btn'} border-none py-2 px-5 font-semibold`}>Daftar</button>
        ) : (
            <button className="moreDetailsBtn border-none py-2 px-5 font-semibold">Selengkapnya</button>
        )
    )
}

export default Button
