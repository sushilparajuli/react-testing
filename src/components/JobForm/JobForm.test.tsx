import { render, screen, logRoles, getByRole } from "@testing-library/react";
import { JobForm } from "./JobForm";

describe("JobForm", () => {
  test("render correctly", () => {
    render(<JobForm />);
    const nameElm = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElm).toBeInTheDocument();

    const bioElm = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElm).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", { level: 1 }); // we can use level for heading
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const jobLocationElm = screen.getByRole("combobox");
    expect(jobLocationElm).toBeInTheDocument();

    const termsElm = screen.getByRole("checkbox");
    expect(termsElm).toBeInTheDocument();

    const submitElm = screen.getByRole("button");
    expect(submitElm).toBeInTheDocument();
  });
});
