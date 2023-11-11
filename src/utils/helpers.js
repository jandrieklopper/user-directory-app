// src/utils/helpers.js
/**
 * Generates a unique ID for a new user based on the existing users' IDs.
 * @param {Array} users - The array of existing users.
 * @returns {number} - The next available unique ID.
 */
export const generateUniqueId = (users) => {
  // Find the maximum ID from the existing users
  const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);

  // Calculate the next available ID
  const nextId = maxId + 1;

  return nextId;
};
