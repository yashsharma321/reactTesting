import { screen, render, logRoles } from "@testing-library/react";
import List from "./List";

it("List Component", () => {
  render(<List />);
  //logRoles(screen.getByTestId("listroot"));
  const ButtonElement1 = screen.getByRole("button", { name: "test button" });
  expect(ButtonElement1).toBeInTheDocument();
  
  // const ButtonElement2 = screen.queryByRole("button", { name: "test button" });
  // expect(ButtonElement2).not.toBeInTheDocument(); 
  // Works when we need to test if button exists or not. queryByRole return null instead of error
});
