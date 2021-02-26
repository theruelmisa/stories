import React, { useEffect, useRef, useCallback } from 'react';

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
        <div className="backdrop" ref={modalRef} onClik={handleCloseModal}>
            <img src={selectedImage} alt="modal pic" />
        </div>
    );
}

export default Modal;