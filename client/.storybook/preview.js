import React from "react";
import { MemoryRouter } from "react-router-dom";
import GlobalStyle from "../src/GlobalStyle";

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
};
