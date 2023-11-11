import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders the app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/user directory/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders the user form", () => {
  render(<App />);
  const formElement = screen.getByLabelText(/add user/i);
  expect(formElement).toBeInTheDocument();
});

test("adds a new user to the list", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const submitButton = screen.getByText(/add user/i);

  // Fill out the form and submit it
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  fireEvent.click(submitButton);

  // Check that the new user is in the list
  const newUserElement = screen.getByText(/john doe/i);
  expect(newUserElement).toBeInTheDocument();
});

test("filters the user list by name", () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/search/i);

  // Search for a specific user
  fireEvent.change(searchInput, { target: { value: "Leanne Graham" } });

  // Check that only the matching user is in the list
  const matchingUserElement = screen.getByText(/leanne graham/i);
  expect(matchingUserElement).toBeInTheDocument();

  const otherUserElement = screen.queryByText(/john doe/i);
  expect(otherUserElement).not.toBeInTheDocument();
});

test("filters the user list by email", () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/search/i);

  // Search for a specific email address
  fireEvent.change(searchInput, { target: { value: "Sincere@april.biz" } });

  // Check that only the matching user is in the list
  const matchingUserElement = screen.getByText(/leanne graham/i);
  expect(matchingUserElement).toBeInTheDocument();

  const otherUserElement = screen.queryByText(/john doe/i);
  expect(otherUserElement).not.toBeInTheDocument();
});

test("displays a message when no users match the search term", () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/search/i);

  // Search for a term that doesn't match any users
  fireEvent.change(searchInput, { target: { value: "foobar" } });

  // Check that the "no matching users" message is displayed
  /**
   * The message element that displays when no matching users are found.
   * @type {HTMLElement}
   */
  const messageElement = screen.getByText(/no matching users found/i);
  expect(messageElement).toBeInTheDocument();
});
