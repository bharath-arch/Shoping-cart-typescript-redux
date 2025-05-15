import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({});

describe("Button", () => {
  it("item add to cart on button click", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Button id={1} title={"title"} image={"image"} price={1} />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getByRole("button", { name: /add to cart/i });
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

