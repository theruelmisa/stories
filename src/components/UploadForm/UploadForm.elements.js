import styled from 'styled-components';

export const FormContainer = styled.div`
    grid-column: col-start 3 / col-end 6 ;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 2rem;
    padding: 1.5rem 0;

    text-align: center;
\
`;

export const Headline = styled.p`
    font-size: 1.6rem;
    letter-spacing: .12rem;
    margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
    cursor: pointer;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem auto;
    line-height: 3rem;
    color: var(--black);
    font-weight: 700;
    font-size: 3rem;

    &:hover {
        color: var(--grey-1);
    }
`;

export const FormInput = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
`;


export const Feedback = styled.div`
    height: 6rem;
    font-size: 1.2rem;
`;

export const Error = styled.p`
    color: var(--red);
`;



