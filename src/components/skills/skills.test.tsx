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

  it("testing findBy", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    ); // Wait for 1000 ms which is default to render elements, best case for rendering components based on Promise. for timeout modification need to send config as third params
    expect(startLearningButton).toBeInTheDocument(); // as we passed 3 skills
  });
});
