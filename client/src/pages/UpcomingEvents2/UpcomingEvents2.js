import React, {useState, useEffect} from 'react';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import Table from '../../components/Table/Table';
import Axios from 'axios';

const UpcomingEvents2 = () => {

    const [columns] = useState([
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
    const [upcomingEvents, setUpcomingEvents] = useState(null);

    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:9000/events',
            withCredentials: true,
    })
        .then(response => {
            setUpcomingEvents(response.data);
        })
    }, []);

    return (
        <div className="upcomingEvents2 newPage text-white">
            <Container first={true}>
                <Nav />
                {
                    columns && upcomingEvents && <Table columns={columns} data={upcomingEvents} admin={false} />
                }
            </Container>
        </div>
    )
}

export default UpcomingEvents2
