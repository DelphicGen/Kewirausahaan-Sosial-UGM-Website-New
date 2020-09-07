import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { withRouter } from 'react-router-dom';

const Form = ({history, columns, data, handleFormChange, handleFullDetails, action1}) => {

    const cancel = () => {
        history.goBack();
    }

    return (
        <>
            {
                columns.map(column => {
                    if(column.Field !== 'id') {
                        let type = 'text';
                        let required = true;
                        
                        if(column.Field === 'date' || column.Field === 'created') type='datetime-local';
                        if(column.Field === 'image') type="file";
                        if(column.Null === 'YES') required = false;

                        return (<Input handleFullDetails={handleFullDetails} onChange={handleFormChange} type={type} required={required} key={column.Field} name={column.Field} value={data[column.Field]} />)
                    }
                    return null;
                })
            }
            <Button green={true} text="Save" onClick={action1} />
            <span className="mr-5"></span>
            <Button red={true} text="Cancel" onClick={cancel} />
        </>
    )
}

export default withRouter(Form)
