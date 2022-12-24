import { render, screen, logRoles, getByRole } from "@testing-library/react";
import { JobForm } from "./JobForm";

describe("JobForm", () => {
  test("render correctly", () => {
    render(<JobForm />);
    const nameElm = screen.getByRole("textbox");
    expect(nameElm).toBeInTheDocument();

    const jobLocationElm = screen.getByRole("combobox");
    expect(jobLocationElm).toBeInTheDocument();

    const termsElm = screen.getByRole("checkbox");
    expect(termsElm).toBeInTheDocument();

    const submitElm = screen.getByRole("button");
    expect(submitElm).toBeInTheDocument();
  });
});
