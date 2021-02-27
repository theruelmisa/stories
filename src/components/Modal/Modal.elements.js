import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
`;



export const ModalImage = styled.img`
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 6rem auto;
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.25);
    border: 1rem solid var(--white);
`;