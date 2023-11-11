import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

test("renders the current year in the footer", () => {
  const currentYear = new Date().getFullYear();
  render(<Footer />);
  const yearElement = screen.getByText(new RegExp(currentYear, "i"));
  expect(yearElement).toBeInTheDocument();
});