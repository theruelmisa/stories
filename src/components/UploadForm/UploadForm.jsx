import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

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
        <form>
            <input type="file" onChange={handleChange} />
            <div>
                { isError && <div> That image is invalid. Choose jpeg or png. </div> }
                { file && <div> {file.name} </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    );
}

export default UploadForm;