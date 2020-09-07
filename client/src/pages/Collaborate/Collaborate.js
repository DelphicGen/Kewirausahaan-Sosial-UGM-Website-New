import React, {useCallback} from 'react';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Input from '../../components/Input/Input';
import './Collaborate.css';
import Axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { success, error } from '../../actions/action';

const Collaborate = () => {
    const dispatch = useCallback(useDispatch(), []);
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleFormChange = (e) => {
        let {name, value} = e.target;

        setData(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const collab = () => {
        Axios({
            method: 'POST',
            url: `http://localhost:9000/collab`,
            data: data,
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                if(response.data === 'Ok') {
                    dispatch(success("Email sent, we will contact you as soon as possible"));
                    setData({
                        name: '',
                        email: '',
                        message: ''
                    })
                } else {
                    dispatch(error(response.data.message))
                }
            })
    }

    return (
        <div className="collaborate pb-0 md:pb-5">
            <Container>
                <SectionHeader heading="Kolaborasi dengan Kami" />
                <div className="flex md:flex-row flex-col-reverse justify-around items-center">
                    <div className="collaborate__media text-center w-screen md:w-1/3 py-5 mt-10 md:mt-0 md:py-0">
                        <h4 className="font-semibold text-2xl">Hubungi Kami</h4>
                        <div>
                            <a className="collaborate__link inline-block mr-5 my-5" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/kewirausahaansosialugm/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="collaborate__link inline-block mr-5 my-5" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/kewirausahaansosialugm"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className="collaborate__link inline-block mr-5 my-5" rel="noopener noreferrer" target="_blank" href="https://twitter.com/SosialUgm"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <h5 className="font-semibold text-xl">atau :</h5>
                        <p className="mt-5">Rina +62 878-3838-6519 (WA Only)</p>

                        <small className="mt-5 block">Icons by Flaticon and Font Awesome</small>
                        <small className="mt-5 block md:hidden">Made with ❤ From Yogyakarta for Indonesia © Kewirausahaan Sosial 2020</small>
                    </div>

                    <div className="collaborate__form w-11/12 sm:w-3/4 md:w-1/3">
                        <Input name="name" onChange={handleFormChange} type="text" required={true} value={data.name} />
                        <Input name="email" onChange={handleFormChange} type="email" required={true} value={data.email} />
                        <Input name="message" onChange={handleFormChange} type="text" value={data.message} />
                        <button onClick={collab} className="collaborate__submit border-0 py-2 w-full font-semibold mx-auto">Kirim</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Collaborate
