import React, { useEffect, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import Axios from 'axios';
import Form from '../../components/Form/Form';

const Edit = ({history, checkAuthenticated}) => {
    const location = useLocation();
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState();
    const [table, setTable] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        const {table, id} = queryString.parse(location.search);
        Axios({
            method: 'GET',
            url: `http://localhost:9000/edit?table=${table}&id=${id}`,
            withCredentials: true
        })
            .then(response => {
                setColumns(response.data.columns);
                setData(response.data.data);
                setTable(response.data.table);
                setId(response.data.id);
            })
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

    const save = () => {
        Axios({
            method: 'POST',
            url: `http://localhost:9000/edit?table=${table}&id=${id}`,
            data: data,
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data === 'Ok') {
                    history.push('/adminDashboard')
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
                    data && columns && table && <Form table={table} id={id} handleFormChange={handleFormChange} handleFullDetails={handleFullDetails} columns={columns} data={data} action1={save} />
                }
            </Container>
        </div>
    )
}

export default withRouter(Edit)
