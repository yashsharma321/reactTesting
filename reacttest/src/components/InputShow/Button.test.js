import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import { act } from "react-dom/test-utils";

describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const btn = getByTestId("button");
    expect(btn).toBeTruthy();
  });

  it("render 1 button before button click", () => {
    const { getAllByTestId } = render(<Button />);
    const btnList = getAllByTestId("button");
    expect(btnList).toHaveLength(1);
  });

  it("renders 2 buttons after clicking", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonElements = getAllByTestId("button");
    expect(buttonElements).toHaveLength(1);
    fireEvent.click(buttonElements[0]);
    const updatedButtonElements = getAllByTestId("button");
    expect(updatedButtonElements).toHaveLength(2);
  });
});
