import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { ImageGrid, ImageBox, Image } from './Gallery.elements';

const item= {
    hidden: { opacity: 0},
    show: { 
        opacity: 1,
        transition: {
            delay: 0.8
        }
    },
}

const Gallery = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images'); 

    return ( 
        <ImageGrid>
            { docs && docs.map(doc => (
                <ImageBox 
                    key={doc.id} 
                    onClick={() => setSelectedImage(doc.url)}
                    layout
                    whileHover={{ opacity: 1 }}
                >
                    <Image 
                        src={doc.url} 
                        alt="uploaded image" 
                        variants={item}
                        initial="hidden"
                        animate="show"
                    />
                </ImageBox>
            ))}
        </ImageGrid>
    );
}

export default Gallery;