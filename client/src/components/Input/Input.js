import React from 'react';
import './Input.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImageCropper from '../ImageCropper/ImageCropper';

const Input = ({name, type, required, value, onChange, handleFullDetails}) => {
    return (
        <div className="input flex flex-col items-start mb-8 relative w-full">
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.substring(1)} {required === true && '*'}</label>
            {
                name === 'message' ? (
                    <textarea name={name} value={value} onChange={onChange} className="input__bar  focus:outline-none p-2 w-full bg-transparent" id={name}></textarea>
                ) : (
                    name === 'full_details' ? (
                        <CKEditor
                            editor={ ClassicEditor }
                            data={ value }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                handleFullDetails(data);
                            } }
                        />
                    ) : (
                        type !== 'file' ? (
                            <input name={name} value={value} onChange={onChange} className="input__bar focus:outline-none p-2 w-full bg-transparent" id={name} type={type ? type : 'text'} required={required ? true : false} /> ) : (
                            <ImageCropper name={name} onChange={onChange} type={type} required = {required} />
                        )
                    )
                )
            }
            <div className="input__after w-full"></div>
        </div>
    )
}

export default Input
