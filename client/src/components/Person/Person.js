import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Person.css'

const Person = ({person, index, imageUrl, detailsRefs}) => {
    return (
        <div key={person.id} className="person__list mr-2">
            <div className="person__header relative overflow-hidden">
                <img className="person__image w-full" src={require(`../../images/${imageUrl}/${person.image}`)} alt={person.name} />
                <div className="person__media flex justify-around items-center px-8 py-4 absolute z-10 w-full">
                    {
                        person.facebook && (
                            <a rel="noopener noreferrer" target="_blank" href={person.facebook}><FontAwesomeIcon icon={faFacebookF} /></a>
                        )
                    }
                    {
                        person.twitter && (
                            <a rel="noopener noreferrer" target="_blank" href={person.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                        )
                    }
                    {
                        person.instagram && (
                            <a rel="noopener noreferrer" target="_blank" href={person.instagram}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        )
                    }
                    {
                        person.linkedin && (
                            <a rel="noopener noreferrer" target="_blank" href={person.linkedin}><FontAwesomeIcon icon={faInstagram} /></a>
                        )
                    }
                </div>
            </div>

            <div ref={el => detailsRefs.current[index] = el} className="person__details flex px-2 flex-col justify-center text-center">
                <h5 className="person__name text-lg font-semibold">{person.name}</h5>
                <p className="person__title text-sm">{person.title}</p>
            </div>
        </div>
    )
}

export default Person
