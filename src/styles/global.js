import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;    
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
    }

    input:-internal-autofill-selected {
        background-color: transparent !important;
        color: #FFFFFF !important;
        border: 1px solid #ccc; /* Opcional, caso queira uma borda */
  }
`;
