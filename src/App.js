import React from 'react';
import { Header, UploadForm } from './components';
import GlobalStyles from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                
                <Header />
                <p>Share a story through images</p>
                <UploadForm />
            </div>
        </> 
        
    );
}

export default App;