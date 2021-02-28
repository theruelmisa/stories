import React from 'react';
import { UploadForm, Gallery } from '../../components';

const Home = ({ setSelectedImage, season }) => {
    return (
        <>
            <UploadForm season={season} />
            <Gallery setSelectedImage={setSelectedImage} />
        </>
    )
};

export default Home;
