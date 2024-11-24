// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("initial render of TodoList", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Redux")).toBeInTheDocument();
  expect(screen.getByText("Learn React Query")).toBeInTheDocument();
});

test("adding a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggling a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Learn React"));
  expect(screen.getByText("Learn React")).toHaveStyle(
    "text-decoration: line-through"
  );
});

test("deleting a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Delete", { selector: "button" }));
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
