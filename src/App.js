import React, { useState } from 'react';
import { Header, UploadForm, Gallery, Modal } from './components';
import GlobalStyles, { MainGrid } from './globalStyles';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [season, setSeason] = useState('spring');


    return (
        <>
            <GlobalStyles />
            <MainGrid>
                
                <Header season={season}/>
                <UploadForm />
                <Gallery setSelectedImage={setSelectedImage} />
                { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
            </MainGrid>
        </> 
        
    );
}

export default App;