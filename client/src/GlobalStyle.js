import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
:root {
}
body
 {
  margin: 0;
  font-size: 16px;
}
`;

export default GlobalStyle;
