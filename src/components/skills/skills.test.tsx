import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills: string[] = ["HTML", "CSS", "JAVASCRIPT"];
  it("testing getByAllRole", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length); // as we passed 3 skills
  });

  it("testing queryByRole", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    }); // return matching node or null if no elements, useful for asserting elements which are not present, throws error if more than one found
    expect(startLearningButton).not.toBeInTheDocument(); // as we passed 3 skills
  });
});
