import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Box from "../components/Box";

test("Box is not null", async () => {
  render(<Box id="box" value="test" />);
  expect(screen.queryByTestId("box")).not.toBeNull;
});

test("verify onClick event", async () => {
  var text = "";
  const mockCallback = jest.fn(() => {});

  render(<Box id="box" onClick={mockCallback} />);
  fireEvent.click(screen.getByRole("button"));

  expect(mockCallback.mock.calls.length).toBe(1);
  
});
