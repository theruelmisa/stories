import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Modal } from './components';
import { Home, Spring, Summer, Autumn, Winter } from './pages';
import GlobalStyles, { MainGrid } from './globalStyles';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [season, setSeason] = useState('all');
    const [userLat, setUserLat] = useState(null);

    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        if (userLat) {
            getSeason(userLat, new Date().getMonth());
        }
    }, [userLat])

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords.latitude);
                    setUserLat(position.coords.latitude);
                },
                error => {
                    setSeason('all');
                }
            )
        }
    }
    const getSeason = (lat, month) => {
        if ( month > 1 && month < 5 ) {
            lat > 0 ? setSeason('spring') : setSeason('autumn');
        } else if ( month > 4 && month < 8) {
            lat > 0 ? setSeason('summer') : setSeason('winter');
        } else if ( month > 7 && month < 11) {
            lat > 0 ? setSeason('autumn') : setSeason('spring');
        } else {
            lat > 0 ? setSeason('winter') : setSeason('summer');
        }
    } 

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