import React from "react";

/**
 * Renders the footer component with the current year.
 * @returns {JSX.Element} The footer component.
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white text-center p-3 bg-dark mt-auto">
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
