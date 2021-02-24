import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap');
    
    :root {
        // Add Colors

        // Add Shadows

        // Add layout sizing

        // Add font-sizing?
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
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;