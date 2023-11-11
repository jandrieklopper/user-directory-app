// UserSearch.js
import React from "react";

/**
 * A component that renders a search input for users.
 * @param {Object} props - The props object for UserSearch.
 * @param {function} props.handleSearch - A function to handle search input changes.
 * @param {boolean} props.noMatch - A boolean to indicate if there is no match for the search input.
 * @returns {JSX.Element} - A JSX element representing the UserSearch component.
 */
const UserSearch = ({ handleSearch, noMatch }) => {
  return (
    <div className="user-search mb-3">
      <label htmlFor="search" hidden>
        Search
      </label>
      <input
        type="text"
        placeholder="Enter a name or email"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default UserSearch;
