import React, {useState, useEffect} from 'react';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import './UpcomingEvents2.css';
import Table from '../../components/Table/Table';
import Axios from 'axios';

const UpcomingEvents2 = () => {

    const [columns, setColumns] = useState([
        {
            Header: 'Judul',
            accessor: 'title'
        }, 
        {
            Header: 'Deskripsi',
            accessor: 'details'
        },
        {
            Header: 'Tanggal',
            accessor: 'date'
        }
    ]);
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:9000/events',
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
    })
        .then(response => {
            setData(response.data)
        })
    }, []);

    return (
        <div className="upcomingEvents2 text-white">
            <Container first={true}>
                <Nav />
                {
                    columns && data.length > 0 && <Table columns={columns} data={data} />
                }
            </Container>
        </div>
    )
}

export default UpcomingEvents2
