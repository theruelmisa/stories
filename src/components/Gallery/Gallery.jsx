import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { ImageGrid, ImageBox, Image } from './Gallery.elements';

const Gallery = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images'); 

    return ( 
        <ImageGrid>
            { docs && docs.map(doc => (
                <ImageBox key={doc.id} onClick={() => setSelectedImage(doc.url)}>
                    <Image src={doc.url} alt="uploaded image" />
                </ImageBox>
            ))}
        </ImageGrid>
    );
}

export default Gallery;