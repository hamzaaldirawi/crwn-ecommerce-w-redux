import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;

        @media (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
        /* Work on Firefox*/
        scrollbar-width: thin;
        scrollbar-color: grey white;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }
  
    *::-webkit-scrollbar-track {
        background: white;
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 20px;
        border: 3px solid white;
    }
`