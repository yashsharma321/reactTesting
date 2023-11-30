import { render, fireEvent } from "@testing-library/react";
import PressHere from "./Button";

describe("click button", () => {
  it("check button render", () => {
    const { queryByTitle } = render(<PressHere />);
    const btn = queryByTitle("dummyButton");
    expect(btn).toBeInTheDocument();
  });

  it("onclick", () => {
    const { queryByTitle } = render(<PressHere />);
    const btn = queryByTitle("dummyButton");
    expect(btn.innerHTML).toBe("Press Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked");
  });
});
