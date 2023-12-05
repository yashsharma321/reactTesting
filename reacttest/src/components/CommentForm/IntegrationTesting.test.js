import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

//instead of fireEvent we are using userEvent, for this async and await are required.

test("comments gets displayed after submitting", async () => {
  render(<App />);

  const checkbox = screen.getByLabelText("i agree to terms and conditions", {
    exact: false,
  });

  const submitbtn = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("write your comment here");

  await userEvent.type(commentInput, "nice pic dear");
  await userEvent.click(checkbox);
  await userEvent.click(submitbtn);

  const comment = screen.getByText("nice pic dear", { exact: false });
  expect(comment).toBeInTheDocument();
});

test("2 comments gets displayed after submitting", async () => {
  render(<App />);

  const checkbox = screen.getByLabelText("i agree to terms and conditions", {
    exact: false,
  });

  const submitbtn = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("write your comment here");

  await userEvent.type(commentInput, "nice pic dear");
  await userEvent.click(checkbox);
  await userEvent.click(submitbtn);

  await userEvent.type(commentInput, "awesome");
  await userEvent.click(submitbtn);

  const comment = screen.getAllByTestId("commentlist");

  expect(comment.length).toBe(2);
});
