import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("test react", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders click submit and remove", () => {
    render(<App />);
    const inputText = screen.getByText("Enter Text:");
    userEvent.type(inputText, "new value");

    const submitButton = screen.getByText("submit");
    fireEvent.click(submitButton);

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveTextContent("new value");

    const abortButton = screen.getByText("remove");
    fireEvent.click(abortButton);
    expect(menuitem).toHaveTextContent("");
  });
});
