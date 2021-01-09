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
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: var(--neutral-mid-N400);
  background-color: var(--neutral-light-N10);
}


h1,
h2,
h3,
h4 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: normal;
  color: var(--neutral-dark-N900);
  margin: 0;
  padding-bottom: 0.3em;
}


p {
  margin: 0;
  padding-bottom: 0.2em;
}


a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: var(--neutral-dark-N500);
  }
`;

export default GlobalStyle;
