import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Input from '../../components/Input/Input';
import './Login.css'
import { withRouter } from 'react-router-dom';

const Login = ({history, checkNotAuthenticated}) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const login = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:9000/login',
            data: loginForm,
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data.message === 'Ok') {
                    history.push('/adminDashboard')
                }
            })
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setLoginForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    useEffect(() => {
        let didCancel = false;
        const fetchCheckNotAuthenticatedAPI = async () => {
            const response = await checkNotAuthenticated();
            if(!didCancel) {
                if(response.data !== 'Ok') history.push('/adminDashboard')
            }
        }
        fetchCheckNotAuthenticatedAPI();
        return () => { didCancel = true }
    }, [checkNotAuthenticated, history]);

    return (
        <div className="newPage text-white login flex justify-center items-center h-screen">
            <div className="login__container text-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <h3 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold">Login</h3>
                <Input name="email" onChange={handleFormChange} value={loginForm.email} type="email" required={true} />
                <Input name="password" onChange={handleFormChange} value={loginForm.password} type="password" required={true} />
                <button onClick={login} className="login__submit text-black border-0 py-2 w-full font-semibold mx-auto mb-2">Login</button>
                <a href="/forgot" className="font-bold">Forgot Password</a>
            </div>
        </div>
    )
}

export default withRouter(Login)
