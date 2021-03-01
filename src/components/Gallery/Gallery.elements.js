import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ImageGrid = styled(motion.div)`
    grid-column: center-start / center-end;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
`;

export const ImageBox = styled(motion.div)`
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.70;
`;

export const Image = styled(motion.img)`
    cursor: pointer;
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;

`;