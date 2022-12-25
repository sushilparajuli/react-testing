import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter : User Interactions", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const CountElement = screen.getByRole("heading");
    expect(CountElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count to 0", () => {
    render(<Counter />);
    const CountElement = screen.getByRole("heading");
    expect(CountElement).toHaveTextContent("0");
  });

  test("renders a count to 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);
    const CountElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(CountElement).toHaveTextContent("2");
  });
});
