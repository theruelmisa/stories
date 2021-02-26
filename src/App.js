import React, { useState } from 'react';
import { Header, UploadForm, Gallery, Modal } from './components';
import GlobalStyles from './globalStyles';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    return (
        <>
            <GlobalStyles />
            <div>
                
                <Header />
                <p>Share a story through images</p>
                <UploadForm />
                <Gallery setSelectedImage={setSelectedImage} />
                { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
            </div>
        </> 
        
    );
}

export default App;