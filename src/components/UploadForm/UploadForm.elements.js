import styled from 'styled-components';

export const Form = styled.form`
    margin: 3rem auto 1rem;
    text-align: center;
`;

export const FormLabel = styled.label`
    cursor: pointer;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem auto;
    line-height: 3rem;
    color: orange;
    font-weight: 700;
    font-size: 3rem;

    &:hover {
        color: orangered;
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
    color: red;
`;



