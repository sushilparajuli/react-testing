import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// .only .skip can be use in describe/test block

describe("Greet Component test", () => {
  test("render Correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Greeting/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested eg", () => {
    test("render with a name", () => {
      render(<Greet name="sushil" />);
      const textElement = screen.getByText(/Greeting sushil/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Multiple Describle eg", () => {
  test("render with a name and age", () => {
    render(<Greet name="sushil" age={30} />);
    const textElement = screen.getByText(/Greeting sushil and 30/i);
    expect(textElement).toBeInTheDocument();
  });
});
