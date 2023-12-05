import { render, screen, fireEvent } from "@testing-library/react";
import CommentList from "./CommentList";

test("comments are not available", () => {
  render(<CommentList allcomments={[]} />);
  const h2Element = screen.getByText("no comments", { exact: false });

  expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
  const comments = [
    { id: 1, text: "comment 1" },
    { id: 2, text: "comment 2" },
  ];
  render(<CommentList allcomments={comments} />);
  const h2Element = screen.queryByText("no comments", { exact: false });

  expect(h2Element).not.toBeInTheDocument();

  // expect(screen.getByText("comment 1")).toBeInTheDocument();
  // expect(screen.getByText("comment 2")).toBeInTheDocument();

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(comments.length);
});
