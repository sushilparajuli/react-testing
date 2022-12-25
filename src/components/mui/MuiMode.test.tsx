import { render, screen } from "../../test-utils/test.utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  it("renders text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/dark mode/i); // as we passed 3 skills
  });
});
