import styled from 'styled-components';

export const Bar = styled.div`
    height: .5rem;
    width: ${ props => `${props.width}%` };
    background-color: var(--autumn);
    margin-top: 2rem;
    border-radius: 2rem;

`;