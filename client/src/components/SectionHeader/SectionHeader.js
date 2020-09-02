import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({heading}) => {
    return (
        <h3 className="sectionHeader font-bold text-center text-3xl md:text-4xl relative mx-auto mb-16">{heading}</h3>
    )
}

export default SectionHeader
