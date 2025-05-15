import { render, screen ,fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";

// Create a mutable mock for useFormGetData
let mockFormData = {
  formdata: { email: "", password: "" },
  invalidEmail: false,
  setInvalidEmail: vi.fn(),
  handleChangeEvent: vi.fn(),
};

// Mock the module and return the current value of mockFormData
vi.mock("../../../utils/withFormGetData", () => ({
  useFormGetData: () => mockFormData,
}));

// Mock LoginBtn
vi.mock("../../ButtonGroup/LoginBtn/LoginBtn", () => ({
  LoginBtn: () => <button>Login</button>,
}));

describe("Login Component", () => {
  beforeEach(() => {
    // Reset default mock state before each test
    mockFormData = {
      formdata: { email: "", password: "" },
      invalidEmail: false,
      setInvalidEmail: vi.fn(),
      handleChangeEvent: vi.fn((e) => {
        const { name, value } = e.target;
        mockFormData.formdata[name as keyof typeof mockFormData.formdata] = value;
      }),
    };
  });

  it("renders the login form correctly", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Enter your Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { name: "email", value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { name: "password", value: "secret123" } });

    expect(mockFormData.formdata.email).toBe("test@example.com");
    expect(mockFormData.formdata.password).toBe("secret123");
  
    
  });

  it("shows error message for invalid email", () => {
    mockFormData.invalidEmail = true;
    mockFormData.formdata.email = "invalid";

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });
});
