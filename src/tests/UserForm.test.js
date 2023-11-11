import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "../Components/UserForm";

describe("UserForm", () => {

  describe("UserForm", () => {
    const mockAddUser = jest.fn();

    test("renders the form header", () => {
      render(<UserForm addUser={mockAddUser} />);
      const headerElement = screen.getByText(/add user/i);
      expect(headerElement).toBeInTheDocument();
    });

    test("renders the name input field", () => {
      render(<UserForm addUser={mockAddUser} />);
      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toBeInTheDocument();
    });

    test("renders the email input field", () => {
      render(<UserForm addUser={mockAddUser} />);
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeInTheDocument();
    });

    test("renders the phone input field", () => {
      render(<UserForm addUser={mockAddUser} />);
      const phoneInput = screen.getByLabelText(/phone/i);
      expect(phoneInput).toBeInTheDocument();
    });

    test("renders the company input field", () => {
      render(<UserForm addUser={mockAddUser} />);
      const companyInput = screen.getByLabelText(/company/i);
      expect(companyInput).toBeInTheDocument();
    });

    test("submits the form with valid data", async () => {
      render(<UserForm addUser={mockAddUser} />);
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);
      const companyInput = screen.getByLabelText(/company/i);
      const submitButton = screen.getByText(/add user/i);

      // Fill out the form and submit it
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
      fireEvent.change(phoneInput, { target: { value: "1234567890" } });
      fireEvent.change(companyInput, { target: { value: "Acme Inc." } });
      fireEvent.click(submitButton);

      // Check that the addUser function was called with the correct data
      expect(mockAddUser).toHaveBeenCalledWith({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "1234567890",
        company: { name: "Acme Inc." }
      });

      // Check that the form was reset
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(phoneInput).toHaveValue("");
      expect(companyInput).toHaveValue("");
    });

    test("displays an error message when the form is submitted with invalid data", async () => {
      render(<UserForm addUser={mockAddUser} />);
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);
      const companyInput = screen.getByLabelText(/company/i);
      const submitButton = screen.getByText(/add user/i);

      // Fill out the form with invalid data and submit it
      fireEvent.change(nameInput, { target: { value: "" } });
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.change(phoneInput, { target: { value: "123" } });
      fireEvent.change(companyInput, { target: { value: "" } });
      fireEvent.click(submitButton);

      // Check that the addUser function was not called
      expect(mockAddUser).not.toHaveBeenCalled();

      // Check that error messages are displayed for each invalid field
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is invalid/i)).toBeInTheDocument();
      expect(screen.getByText(/company name is required/i)).toBeInTheDocument();

      // Check that the form was not reset
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("invalid-email");
      expect(phoneInput).toHaveValue("123");
      expect(companyInput).toHaveValue("");
    });
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();
  });

  test("renders the email input field", () => {
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  test("renders the phone input field", () => {
    const phoneInput = screen.getByLabelText(/phone/i);
    expect(phoneInput).toBeInTheDocument();
  });

  test("renders the company input field", () => {
    const companyInput = screen.getByLabelText(/company/i);
    expect(companyInput).toBeInTheDocument();
  });

  test("submits the form with valid data", async () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const companyInput = screen.getByLabelText(/company/i);
    const submitButton = screen.getByText(/add user/i);

    // Fill out the form and submit it
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(companyInput, { target: { value: "Acme Inc." } });
    fireEvent.click(submitButton);

    
    // Check that the addUser function was called with the correct data
    expect(mockAddUser).toHaveBeenCalledWith({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      company: { name: "Acme Inc." }
    });

    // Check that the form was reset
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(phoneInput).toHaveValue("");
    expect(companyInput).toHaveValue("");
  });
  const mockAddUser = jest.fn();

  test("displays an error message when the form is submitted with invalid data", async () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const companyInput = screen.getByLabelText(/company/i);
    const submitButton = screen.getByText(/add user/i);

    // Fill out the form with invalid data and submit it
    fireEvent.change(nameInput, { target: { value: "" } });
    const mockAddUser = jest.fn();
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.change(companyInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    // Check that the addUser function was not called
    expect(mockAddUser).not.toHaveBeenCalled();

    // Check that error messages are displayed for each invalid field
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is invalid/i)).toBeInTheDocument();
    expect(screen.getByText(/company name is required/i)).toBeInTheDocument();

    // Check that the form was not reset
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("invalid-email");
    expect(phoneInput).toHaveValue("123");
    expect(companyInput).toHaveValue("");
  });
});