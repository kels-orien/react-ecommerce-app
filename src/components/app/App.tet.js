import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders welcome message", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome to React")).toBeInTheDocument();
});
