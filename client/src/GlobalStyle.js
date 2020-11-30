import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}
:root {
    --primary-blue: #0052CC;
    --primary-dark: #172B4D;
    --primary-light: #fff;

    --secondary-red: #FF5630;
    --secondary-gold: #FFAB00;
    --secondary-green: #36B37E;

    --neutral-dark-N900: #091E42;
    --neutral-dark-N700: #253858;
    --neutral-dark-N500: #42526E;
    --neutral-mid-N400: #505F79;
    --neutral-mid-N200: #6B778C;
    --neutral-mid-N100: #7A869A;
    --neutral-mid-N80: #97A0AF;
    --neutral-mid-N60: #B3BAC5;
    --neutral-light-N10: #FAFBFC;
    --neutral-light-N0: #fff;
}
body
 {
  margin: 0;
  font-size: 16px;
}
`;

export default GlobalStyle;
