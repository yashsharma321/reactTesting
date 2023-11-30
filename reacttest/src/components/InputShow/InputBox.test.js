import { render, fireEvent } from "@testing-library/react";
import InputBox from "./InputBox";

describe("Input Component", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<InputBox showDiv={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
  });

  it("render div", () => {
    const { getByTestId } = render(<InputBox showDiv={true} />);
    const div = getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  it("don't render div", () => {
    const { queryByTestId } = render(<InputBox showDiv={false} />);
    const div = queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  });

  it("change on input causes change on header", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <InputBox showDiv={true} />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Hello World!" } });
    const headerData = getByTestId("displaySearch").textContent;
    expect(headerData).toEqual("Hello World!");
  });
});
