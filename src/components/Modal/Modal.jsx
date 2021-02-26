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
        <Backdrop ref={modalRef} onClick={handleCloseModal}>
            <ModalImage src={selectedImage} alt="modal pic" />
        </Backdrop>
    );
}

export default Modal;