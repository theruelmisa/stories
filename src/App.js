import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Modal } from './components';
import { Home, Spring, Summer, Autumn, Winter } from './pages';
import GlobalStyles, { MainGrid } from './globalStyles';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [season, setSeason] = useState('spring');

    return (
        <Router>
            <GlobalStyles />
            <MainGrid>
                
                <Header season={season}/>
                <Switch>
                    <Route path="/" exact>
                        <Home setSelectedImage={setSelectedImage}/>
                    </Route>
                    <Route path="/spring" exact>
                        <Spring setSelectedImage={setSelectedImage} />
                    </Route>
                    <Route path="/summer" exact>
                        <Summer setSelectedImage={setSelectedImage} />
                    </Route>
                    <Route path="/autumn" exact>
                        <Autumn setSelectedImage={setSelectedImage} />
                    </Route>
                    <Route path="/winter" exact>
                        <Winter setSelectedImage={setSelectedImage} />
                    </Route>
                </Switch>
                { 
                (selectedImage && window.innerWidth > 900) &&
                <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> 
                }
            </MainGrid>
        </Router>
        
    );
}

export default App;