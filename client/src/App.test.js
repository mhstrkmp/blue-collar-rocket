import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders storybook react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to Storybook/i);
  expect(linkElement).toBeInTheDocument();
});
