import React from 'react';
import useFirestore from '../../hooks/useFirestore';

const Gallery = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images');

    return ( 
        <div>
            { docs && docs.map(doc => (
                <div key={doc.id} onClick={() => setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="uploaded image" />
                </div>
            ))}
        </div>
    );
}

export default Gallery;