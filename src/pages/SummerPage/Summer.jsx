import React from 'react';
import { UploadForm, Gallery } from '../../components';

const Summer = ({ setSelectedImage, season }) => {
    return (
        <>
            <UploadForm season={season} />
            <Gallery setSelectedImage={setSelectedImage} />
        </>
    )
};

export default Summer;