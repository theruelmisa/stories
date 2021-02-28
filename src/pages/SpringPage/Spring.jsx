import React from 'react';
import { UploadForm, Gallery } from '../../components';

const Spring = ({ setSelectedImage, selectedImage, season }) => {
    return (
        <>
            <UploadForm season={season} />
            <Gallery setSelectedImage={setSelectedImage} />
        </>
    )
};

export default Spring;
