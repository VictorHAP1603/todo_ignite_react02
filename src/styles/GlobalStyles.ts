import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root {
        --purple: #8284FA;
        --dark-purple: #5E60CE;

        --blue: #4EA8DE;
        --dark-blue: #1E6F9F;

        --gray-700: #0D0D0D;
        --gray-600: #1A1A1A;
        --gray-500: #262626;
        --gray-400: #333333;
        --gray-300: #808080;
        --gray-200: #D9D9D9;
        --gray-100: #F2F2F2;

        --danger: #E25858;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;   
        transition: all .4s;

        &:disabled {
            cursor: not-allowed;
            filter: brightness(.8);
        }
    }

    .container {    
        max-width: 780px;
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
    }
`