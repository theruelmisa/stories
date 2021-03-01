import React, { useEffect, useRef, useCallback } from 'react';
import { Backdrop, ModalImage } from './Modal.elements';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const modalRef = useRef();

    const handleCloseModal = e => {

        if (modalRef.current === e.target) {
            setSelectedImage(null);
        }
    }

    const handleKeyPress = useCallback(e => {
        if (e.key === 'Escape' && selectedImage) {
            setSelectedImage(null)
        }
    }, [setSelectedImage, selectedImage]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => document.removeEventListener('keydown', handleKeyPress);
    })

    return ( 
        <Backdrop 
            ref={modalRef} 
            onClick={handleCloseModal} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
        >
        <ModalImage 
            src={selectedImage} 
            alt="modal pic"
            initial={{ y:"100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: .2 }}
        />
        </Backdrop>
    );
}

export default Modal;