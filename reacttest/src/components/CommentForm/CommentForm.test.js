import { fireEvent, render, screen } from "@testing-library/react";
import CommentForm from "./CommentForm";

describe("test cases related to Comment Form", () => {
  test("Initial Conditions", () => {
    render(<CommentForm />);
    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();

    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    expect(checkbox).toBeInTheDocument();

    const submitbtn = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    expect(submitbtn).toBeDisabled();
  });

  test("Enable submit button on type and checkbox cick", () => {
    render(<CommentForm />);
    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    const submitbtn = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });

    const commentInput = screen.getByPlaceholderText(
      "write your comment here",
      { exact: false }
    );

    fireEvent.change(commentInput, { target: { value: "something" } });
    fireEvent.click(checkbox);

    expect(submitbtn).toBeEnabled();

    fireEvent.click(checkbox);

    expect(submitbtn).toBeDisabled();
  });
});
