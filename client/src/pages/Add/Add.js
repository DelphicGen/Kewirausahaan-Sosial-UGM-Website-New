import React, { useEffect, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import Axios from 'axios';
import Form from '../../components/Form/Form';

const Add = ({history, checkAuthenticated}) => {
    const location = useLocation();
    const [columns, setColumns] = useState(null);
    const [table, setTable] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const {table} = queryString.parse(location.search);
        if(table !== 'users'){
            Axios({
                method: 'GET',
                url: `http://localhost:9000/new?table=${table}`,
                withCredentials: true
            })
                .then(response => {
                    let tempData = {}
                    setColumns(response.data.columns);
                    setTable(response.data.table);
                    response.data.columns.forEach(column => {
                        if(column.Field !== 'id') tempData[column.Field] = '';
                    })
                    setData({...tempData});
                })
        } else {
            let tempData = {
                email: '',
                username: '',
                password: '',
            };
            let tempColumns = [
                {
                    Field: 'email',
                    Null: 'NO'
                }, {
                    Field: 'username',
                    Null: 'NO'
                }, {
                    Field: 'password',
                    Null: 'NO'
                }
            ];
            setColumns([...tempColumns]);
            setData({...tempData});
            setTable(table);
        }
    }, [location.search]);

    useEffect(() => {
        let didCancel = false;
        const fetchCheckAuthenticatedAPI = async () => {
            const response = await checkAuthenticated();
            if(!didCancel) {
                if(response.data !== 'Ok') history.push('/');
            }
        }

        fetchCheckAuthenticatedAPI();
        return () => { didCancel = true }
    }, [checkAuthenticated, history]);

    const handleFormChange = (e) => {
        let {name, value} = e.target;
        
        if(name === 'image') {
            let file = value.split('\\');
            value = file[file.length-1];
        }

        setData(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleFullDetails = (data) => {
        setData(prevForm => ({
            ...prevForm,
            full_details: data
        }))
    }

    const save = (e) => {
        e.preventDefault();
        Axios({
            method: 'POST',
            url: `http://localhost:9000/${table === 'users' ? 'register' : 'new'}?table=${table}`,
            data: data,
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data === 'Ok') {
                    history.push('/adminDashboard')
                } else if (response.data.message === 'Not super admin') {
                    history.push('/adminDashboard')
                } else {

                }
            })
    }

    return (
        <div className="newPage text-white pb-5">
            <Container first={true}>
                <Nav />
                {
                    table && 
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-5">{table.toUpperCase()}</h3>
                }
                {
                    data && columns && table && <Form table={table} data={data} handleFormChange={handleFormChange} handleFullDetails={handleFullDetails} columns={columns} action1={save} />
                }
            </Container>
        </div>
    )
}

export default withRouter(Add)
