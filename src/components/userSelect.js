import React from 'react';

const UserSelect = ({ setCurrentUser }) => {
  const users = ['Laeli NurC', 'Minatozaki', 'Sana'];

  return (
    <div className="user-select">
      <select onChange={(e) => setCurrentUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
