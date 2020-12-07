import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}
:root {
    --primary-first: #0052CC;
    --primary-second: #172B4D;
    --primary-third: #fff;

    --secondary-warn: #FF5630;
    --secondary-info: #FFAB00;
    --secondary-success: #36B37E;

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
  padding: 0;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--neutral-dark-N700);
}

h1,
h2,
h3,
h4 {
  color: var(--neutral-dark-N700);
  margin: 0;
  padding-bottom: 0.3em;
}

p {
  margin: 0;
  padding-bottom: 0.2em;

}
`;

export default GlobalStyle;
