import React from 'react';
import { UploadForm, Gallery } from '../../components';

const Winter = ({ setSelectedImage, season }) => {
    return (
        <>
            <UploadForm season={season} />
            <Gallery setSelectedImage={setSelectedImage} />
        </>
    )
};

export default Winter;