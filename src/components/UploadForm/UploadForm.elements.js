import styled from 'styled-components';

export const FormContainer = styled.div`
    grid-column: center-start / center-end;
    display: flex;
    justify-content: center;
    border: 1px solid red;
    margin-bottom: 3rem;
`;

export const Form = styled.form`
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



