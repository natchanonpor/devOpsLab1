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
    const inputText = screen.getByRole("inputText");
    userEvent.type(inputText, "new value");

    const submitButton = screen.getByText("submit");
    fireEvent.click(submitButton);

    const myText = screen.getByRole("myText");
    expect(myText).toHaveTextContent("new value");

    const abortButton = screen.getByText("remove");
    fireEvent.click(abortButton);
    expect(myText).toHaveTextContent("");
  });
});
