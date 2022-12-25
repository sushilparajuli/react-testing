import { logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { JobForm } from "./JobForm";

describe("JobForm", () => {
  test("render correctly with getByRole", () => {
    render(<JobForm />);
    const nameElm = screen.getByRole("textbox", {
      name: "Name",
    }); // label text of the form element also we can use eg {selector: "input"} for conflicting labels
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

  test("render correctly with getByPlaceholderText", () => {
    render(<JobForm />);
    const nameElmwithPlaceholder = screen.getByPlaceholderText("Fullname");
    expect(nameElmwithPlaceholder).toBeInTheDocument();
  });

  test("render correctly with getByLabelText", () => {
    render(<JobForm />);
    const nameElm = screen.getByLabelText("Name"); // label text of the form element also we can use eg {selector: "input"} for conflicting labels
    expect(nameElm).toBeInTheDocument();

    const termsElm2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    ); // works well with wrapped label
    expect(termsElm2).toBeInTheDocument();
  });

  test("render correctly with getByText", () => {
    render(<JobForm />);
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("render correctly with getByDisplayValue", () => {
    render(<JobForm />);
    const inputWithValue = screen.getByDisplayValue("Sushil"); // input value
    expect(inputWithValue).toBeInTheDocument();
  });

  test("render correctly with getByAltText", () => {
    render(<JobForm />);
    const imageElement = screen.getByAltText("a person with a laptop"); // img alt attribute
    expect(imageElement).toBeInTheDocument();
  });

  test("render correctly with getByTitle", () => {
    render(<JobForm />);
    const spanWithTitle = screen.getByTitle("close"); // title attribute
    expect(spanWithTitle).toBeInTheDocument();
  });

  test("render correctly with getByTestId", () => {
    render(<JobForm />);
    const divWithTestId = screen.getByTestId("custom-element"); // title attribute
    expect(divWithTestId).toBeInTheDocument();
  });

  test("keyboard  clear api", async () => {
    user.setup();
    render(<JobForm />);
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    }); // title attribute
    await user.clear(bioElement);
    expect(bioElement).toHaveValue("");
  });

  test("keyboard selectionOptions api", async () => {
    user.setup();
    render(<JobForm />);
    const selectOption = screen.getByRole("combobox", {
      name: /job location/i,
    }); // title attribute
    const nepOption = screen.getByRole("option", { name: /Nepal/i });
    await user.selectOptions(selectOption, "NP");
    expect(nepOption.selected).toBe(true);
  });

  test("keyboard upload api", async () => {
    user.setup();
    render(<JobForm />);
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const inputFile = screen.getByLabelText(/upload file/i); // title attribute
    await user.upload(inputFile, file);
    expect(inputFile.files[0]).toBe(file);
    expect(inputFile.files.item(0)).toBe(file);
    expect(inputFile.files).toHaveLength(1);
  });
});
