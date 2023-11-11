import { render, screen, fireEvent } from "@testing-library/react";
import UserSearch from "../Components/UserSearch";

describe("UserSearch", () => {
  test("renders input element with placeholder text", () => {
    render(<UserSearch />);
    const inputElement = screen.getByPlaceholderText(/enter a name or email/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls handleSearch function with input value when input value changes", () => {
    const handleSearchMock = jest.fn();
    render(<UserSearch handleSearch={handleSearchMock} />);
    const inputElement = screen.getByPlaceholderText(/enter a name or email/i);
    fireEvent.change(inputElement, { target: { value: "john" } });
    expect(handleSearchMock).toHaveBeenCalledWith("john");
  });

  test("renders noMatch text when provided", () => {
    render(<UserSearch noMatch="No users found." />);
    const noMatchElement = screen.getByText(/no users found/i);
    expect(noMatchElement).toBeInTheDocument();
  });
});