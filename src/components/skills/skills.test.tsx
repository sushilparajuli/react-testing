import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills: string[] = ["HTML", "CSS", "JAVASCRIPT"];
  it("testing getByAllRole", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length); // as we passed 3 skills
  });
});
