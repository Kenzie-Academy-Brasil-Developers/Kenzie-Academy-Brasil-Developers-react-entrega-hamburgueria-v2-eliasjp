import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;

        --font-size-1: 1.625rem; /* 26px */
        --font-size-2: 1.375rem; /* 22px */
        --font-size-3: 1.125rem; /* 18px */
        --font-size-4: 1rem ; /* 16px */
        --font-size-5: 0.9rem; /* 14px */
        --font-size-6: 0.8rem; /* 12px */

        --font-weight-1: 700; /* Bold */
        --font-weight-2: 600; /* Semi-bold */
        --font-weight-3: 400; /* Regular */

        --border-radius-1: 8px;
        --border-radius-2: 5px;
    }
`