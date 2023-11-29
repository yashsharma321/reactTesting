import Counter from "./Counter";
import { render, fireEvent, getByText } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(5);
  });

  it("counter should increment by 1 if the increase button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increase" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("counter should decrement by 1 if the decrease button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    const decrementBtn = getByRole("button", { name: "Decrease" });
    const counterValue1 = Number(getByTestId("count").textContent);
    expect(counterValue1).toEqual(5);
    fireEvent.click(decrementBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(4);
  });

  it("counter should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={60} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(60);
    fireEvent.click(restartBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("counter value should invert signs when switch sign button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={6} />);
    const switchSignBtn = getByRole("button", { name: "Switch Sign" });
    expect(Number(getByTestId("count").textContent)).toEqual(6);
    fireEvent.click(switchSignBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(-6);
  });
});
