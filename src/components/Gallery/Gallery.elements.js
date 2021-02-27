import styled from 'styled-components';

export const ImageGrid = styled.div`
    grid-column: center-start / center-end;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
`;

export const ImageBox = styled.div`
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.75;

    &:hover {
        opacity: 1;
    }
`;

export const Image = styled.img`
    cursor: pointer;
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;

`;