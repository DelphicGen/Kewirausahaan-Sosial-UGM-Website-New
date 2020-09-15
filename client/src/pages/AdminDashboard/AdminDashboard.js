import React, {useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import Axios from 'axios';
import './AdminDashboard.css';
import Table from '../../components/Table/Table';
import { useCallback } from 'react';
import Button from '../../components/Button/Button';

const AdminDashboard = ({history, checkAuthenticated}) => {

    const [username, setUsername] = useState(null);
    const [role, setRole] = useState('');
    const [data, setData] = useState(null);
    const [table, setTable] = useState('');
    const [tableData, setTableData] = useState(null);
    const [columns, setColumns] = useState(null);

    const fetchData = () => {
        Axios({
            method: 'GET',
            url: 'http://localhost:9000/adminDashboard',
            withCredentials: true
        })
            .then(response => {
                setUsername(response.data.username);
                setRole(response.data.role);
                setData(response.data.data);
            })
    }

    const logout = () => {
        Axios({
            method: 'DELETE',
            url: 'http://localhost:9000/logout',
            withCredentials: true
        })
            .then(response => {
                if(response.data === 'Ok') {
                    history.push('/login');
                }
            })
    }

    const deleteData = useCallback((table, id) => {
        Axios({
            method: 'POST',
            url: `http://localhost:9000/delete?table=${table}&id=${id}`,
            withCredentials: true
        })
            .then(response => {
                if(response.data === 'Ok') {
                    fetchData();
                }
            })
    }, [])

    useEffect(() => {
        let didCancel = false;
        const fetchCheckAuthenticatedAPI = async () => {
            const response = await checkAuthenticated();
            if(!didCancel) {
                if(response.data !== 'Ok') history.push('/login');
            }
        }

        fetchCheckAuthenticatedAPI();
        return () => { didCancel = true }
    }, [checkAuthenticated, history]);

    useEffect(() => {
        fetchData();
        let table = localStorage.getItem('table');
        setTable(table ? table : 'upcoming_event');
    }, [])

    useEffect(() => {
        if(data) {
            let tempColumns = [];
            let tempKey = {
                Header: '',
                accessor: ''
            };
            let tempKey2 = {...tempKey};
            setTableData(data[table]);
            Object.keys(data[table][0]).forEach((key, index) => {
                if(key !== 'full_details' && key !== 'password' && key !== 'resetPasswordExpires' && key !== 'resetPasswordToken') {
                    tempKey.accessor = key;
                    tempKey.Header = key.charAt(0).toUpperCase() + key.slice(1);
                    tempKey2 = {...tempKey}
                    tempColumns[index] = tempKey2;
                }
            })
            setColumns(tempColumns);
        }
    }, [table, data]);

    return (
        <div className="newPage text-white">
            <Container first={true}>
                <Nav />
                {
                    username && role && (
                        <>
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{username}</h3>
                                <div>
                                    <button onClick={logout} className="font-bold">Logout</button>
                                </div>
                            </div>
                            
                        </>
                    )
                }
                <div className="flex justify-between items-center mt-5">
                    <select
                            className="bg-transparent my-5 border-b-2"
                            value={table}
                            onChange={e => {
                                localStorage.setItem('table', e.target.value);
                                setTable(e.target.value)
                            }}
                        >
                        {['article', 'collaboration', 'latest_event', 'leader_review', 'mentor', 'team_member', 'testimonial', 'upcoming_event'].map(table => (
                            <option className="text-black" key={table} value={table}>
                                {table}
                            </option>
                        ))}
                        {
                            role === 'super admin' && (
                                <option className="text-black" key="users" value="users">
                                    users
                                </option>
                            )
                        }
                    </select>
                    <Link to={`/add?table=${table}`}>
                        <Button green={true} text="Add" />
                    </Link>
                </div>
                {
                    tableData && columns && (
                        <>
                            <Table columns={columns} data={tableData} table={table} admin={true} action2={deleteData} />
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default withRouter(AdminDashboard)
