import { render, screen, fireEvent } from "@testing-library/react";
import CartsPage from "./CardsPage";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

// Mock RTK Query
vi.mock("../../Redux/rtk-querry/rtkSllice", () => ({
  useGetDataQuery: () => ({
    data: [
      { id: 1, title: "Product 1", image: "image1.jpg", price: 10 },
      { id: 2, title: "Product 2", image: "image2.jpg", price: 20 },
    ],
  }),
}));

// Optionally mock Cards if it has logic or Redux inside
vi.mock("./Cards", () => ({
  default: ({ title }: { title: string }) => (
    <div>
      <h3>{title}</h3>
      <button onClick={() => console.log("add to cart clicked")}>Add to Cart</button>
    </div>
  ),
}));

const mockStore = configureStore([]);
const store = mockStore({});

describe("CartsPage", () => {
  it("renders products and allows adding to cart", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CartsPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();

    const addButtons = screen.getAllByText("Add to Cart");
    expect(addButtons).toHaveLength(2);

    fireEvent.click(addButtons[0]);
  });
});
