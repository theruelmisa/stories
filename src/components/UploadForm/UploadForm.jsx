import React, { useState } from 'react';
import { 
    FormContainer, 
    Headline,
    FormLabel, 
    FormInput, 
    Feedback, 
    Error 
} from './UploadForm.elements';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IoAddCircleOutline } from 'react-icons/io5'

const UploadForm = ({ season }) => {
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

    return ( 
        <FormContainer> 
            <Headline>Share your seasonal stories through images</Headline>
            <form>
                <FormLabel>
                    <FormInput type="file" onChange={handleChange} />
                    <IoAddCircleOutline />
                </FormLabel>
                <Feedback>
                    { isError && <Error> Invalid format. Choose jpeg or png. </Error> }
                    { file && <div> {file.name} </div> }
                    { file && <ProgressBar file={file} setFile={setFile} season={season}/> }
                </Feedback>
            </form>
        </FormContainer>
    );
}

export default UploadForm;