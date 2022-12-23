import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet Render Correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Greeting/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet Render with a name", () => {
  render(<Greet name="sushil" />);
  const textElement = screen.getByText(/Greeting sushil/i);
  expect(textElement).toBeInTheDocument();
});
