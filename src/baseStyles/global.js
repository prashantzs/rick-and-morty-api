import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        background-image: linear-gradient(to right,#4facfe 0%,#00f2fe 100%);
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }

    .container {
        display: flex;

        &--row {
            width: 100%;
            flex-direction: row;
        }
    }
`;