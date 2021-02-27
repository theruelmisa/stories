import React, { useState } from 'react';
import { Header, UploadForm, Gallery, Modal } from './components';
import GlobalStyles, { MainGrid } from './globalStyles';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    return (
        <>
            <GlobalStyles />
            <MainGrid>
                
                <Header />
                <UploadForm />
                <Gallery setSelectedImage={setSelectedImage} />
                { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
            </MainGrid>
        </> 
        
    );
}

export default App;