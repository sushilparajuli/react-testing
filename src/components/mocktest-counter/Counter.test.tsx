import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter : Mock cases", () => {
  test("renders correctly", () => {
    render(<Counter count={0} />);
    const textElement = screen.getByText("Counter");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Counter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
