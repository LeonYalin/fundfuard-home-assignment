import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const btnUp = screen.getByText("U");
  const btnLeft = screen.getByText("L");
  const btnRight = screen.getByText("R");
  const btnDown = screen.getByText("D");
  const btnReset = screen.getByText("Reset");
  const btnRandomize = screen.getByText("Randomize");

  expect(btnUp).toBeInTheDocument();
  expect(btnLeft).toBeInTheDocument();
  expect(btnRight).toBeInTheDocument();
  expect(btnDown).toBeInTheDocument();
  expect(btnReset).toBeInTheDocument();
  expect(btnRandomize).toBeInTheDocument();
});
