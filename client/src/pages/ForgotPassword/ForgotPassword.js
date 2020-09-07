import React, { useState, useCallback } from 'react';
import './ForgotPassword.css';
import Input from '../../components/Input/Input';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { success, error } from '../../actions/action';

const ForgotPassword = () => {
    const dispatch = useCallback(useDispatch(), []);
    const [email, setEmail] = useState('');

    const forgotPassword = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:9000/forgot',
            data: {email},
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data === 'Ok') {
                    dispatch(success("You will receive an email to reset your password"));
                } else {
                    dispatch(error(response.data.message))
                }
            })
    }
    
    return (
        <div className="newPage text-white forgotPassword flex justify-center items-center h-screen">
            <div className="forgotPassword__container text-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <h3 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold">Forgot Password</h3>
                <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={forgotPassword} className="forgotPassword__submit text-black border-0 py-2 w-full font-semibold mx-auto mb-2">Reset Password</button>
                <a href="/login" className="font-bold">Login</a>
            </div>
        </div>
    )
}

export default ForgotPassword
