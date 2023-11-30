import { render, fireEvent } from "@testing-library/react";
import SearchBox from "./Search";

it("searchRenderCheck", () => {
  const { queryByTitle } = render(<SearchBox />);
  const input = queryByTitle("dummySearch");
  expect(input).toBeInTheDocument();
});

it("searchRenderCheck", () => {
  const { queryByTitle } = render(<SearchBox />);
  const input = queryByTitle("dummySearch");
  expect(input).toBeInTheDocument();
});

describe("change in input", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<SearchBox />);
    const input = queryByTitle("dummySearch");
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(input.value).toBe("testValue");
  });
});
