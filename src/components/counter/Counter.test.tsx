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

  test("renders a count to 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const CountElement = screen.getByRole("heading");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    expect(CountElement).toHaveTextContent("10");
  });

  test("elements are focused in right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
