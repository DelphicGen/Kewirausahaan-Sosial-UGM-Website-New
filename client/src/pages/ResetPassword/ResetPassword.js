import React, { useState, useCallback } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import './ResetPassword.css';
import queryString from 'query-string';
import Input from '../../components/Input/Input';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { success, error } from '../../actions/action';

const ResetPassword = ({history}, props) => {
    const dispatch = useCallback(useDispatch(), []);
    const location = useLocation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetPassword = () => {
        const {token} = queryString.parse(location.search);
        Axios({
            method: 'POST',
            url: `http://localhost:9000/reset/${token}`,
            data: {newPassword, confirmPassword},
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data === 'Ok') {
                    dispatch(success("Successfully reset password"));
                    history.push('/login')
                } else {
                    dispatch(error(response.data.message))
                }
            })
    }
    
    return (
        <div className="newPage text-white resetPassword flex justify-center items-center h-screen">
            <div className="resetPassword__container text-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <h3 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold">Reset Password</h3>
                <Input name="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <Input name="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button onClick={resetPassword} className="resetPassword__submit text-black border-0 py-2 w-full font-semibold mx-auto mb-2">Reset Password</button>
            </div>
        </div>
    )
}

export default withRouter(ResetPassword)
