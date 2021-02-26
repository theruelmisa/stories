import React, { useState } from 'react';
import { Form, FormLabel, FormInput, Feedback, Error } from './UploadForm.elements';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IoAddCircleOutline } from 'react-icons/io5'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [isError, setIsError] = useState(false);

    const fileTypes = ['image/png', 'image/jpeg'];

    const handleChange = e => {
        // accessing file the user selected
        let selected = e.target.files[0];

        if (selected && fileTypes.includes(selected.type)) {
            setFile(selected);
            setIsError(false);
        } else {
            setFile(null);
            setIsError( true );
        }
    }

    console.log(file);

    return ( 
        <Form>
            <FormLabel>
                <FormInput type="file" onChange={handleChange} />
                <IoAddCircleOutline />
            </FormLabel>
            <Feedback>
                { isError && <Error> That image is invalid. Choose jpeg or png. </Error> }
                { file && <div> {file.name} </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </Feedback>
        </Form>
    );
}

export default UploadForm;