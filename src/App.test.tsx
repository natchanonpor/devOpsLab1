import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  jest.restoreAllMocks();
});

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

  test("render fetch", async () => {
    render(<App />);

    jest.spyOn(global, "fetch").mockResolvedValue({
      text: jest.fn().mockResolvedValue("text from backend"),
      // json: jest.fn().mockResolvedValue(mockResponse),
    } as any);

    const callAPIButton = screen.getByRole("button", {
      name: /CALL API/i,
    });

    await act(async () => {
      callAPIWrapper(callAPIButton);
    });

    const menuitem = screen.getByRole("menuitem");
    expect(menuitem).toHaveTextContent("text from backend");
  });
});

function callAPIWrapper(callAPIButton: any) {
  fireEvent.click(callAPIButton);
}
