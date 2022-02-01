import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
    *{ 
        box-sizing: border-box;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }
    
    :root {
        font-size:16px;
    }

`;
