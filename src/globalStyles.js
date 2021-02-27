import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap');
    
    :root {
        // Add Colors
        --red: #e63946;

        --spring: #7fb685;
        --summer: #f48c06;
        --autumn: #dda15e;
        --winter: #ada7c9;

        --black: #222725;
        --white: #f0efeb;
        --grey-1: #7e8287;
        --grey-2: #48565f;
    }

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        background: var(--white);
        color: var(--black);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style: none;
    }
`;

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: [full-start] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(2rem, 1fr) [full-end];
`;

export default GlobalStyles;