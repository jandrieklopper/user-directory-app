import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

test("renders the header with the correct text", () => {
  render(<Header />);
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toHaveTextContent(/user directory/i);
});

test("renders the header with the correct background color", () => {
  render(<Header />);
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toHaveStyle({ backgroundColor: "rgb(0, 123, 255)" });
});

test("renders the header with the correct text color", () => {
  render(<Header />);
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toHaveStyle({ color: "rgb(255, 255, 255)" });
});