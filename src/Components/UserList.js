// src/components/UserList.js
import React from "react";

/**
 * Renders a table of users.
 * @param {Object[]} users - An array of user objects.
 * @param {number} users[].id - The ID of the user.
 * @param {string} users[].name - The name of the user.
 * @param {string} users[].email - The email of the user.
 * @param {string} users[].phone - The phone number of the user.
 * @param {Object} users[].company - The company object of the user.
 * @param {string} users[].company.name - The name of the company.
 * @returns {JSX.Element} A table of users.
 */
const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }
  return (
    <div className="user-list table-responsive-md">
      <table className="table table-striped table-bordered table-hover caption">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
