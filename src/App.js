// App.js
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import UserSearch from "./Components/UserSearch";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import Footer from "./Components/Footer";
import { generateUniqueId } from "./utils/helpers"; // Import the generateUniqueId function
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./styles.css";

/**
 * The main component of the user directory app.
 * @returns {JSX.Element} The App component.
 */
const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    // Fetch initial list of users from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  // Function to generate the next available ID
  const getNextAvailableId = () => generateUniqueId(users);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
    setNoMatch(filtered.length === 0);
  };

  const addUser = (newUser) => {
    // Generate the next available ID
    const nextAvailableId = getNextAvailableId();

    // Use the functional form of setUsers to ensure you're working with the latest state
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: nextAvailableId }
    ]);

    // Update the filtered users (if applicable)
    handleSearch(searchTerm);
  };

  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header />
      <div className="container">
        <UserForm addUser={addUser} />
        <UserSearch handleSearch={handleSearch} noMatch={noMatch} />
        {noMatch ? (
          <p className="text-danger">No matching users found.</p>
        ) : (
          <UserList users={filteredUsers} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
