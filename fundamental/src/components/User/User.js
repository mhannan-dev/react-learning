// User.js
import React, { useContext } from 'react';
import { useUsersContext } from '../hooks/useUsersContext';
const User = ({ user }) => {
  const { users, setUsers } = useUsersContext() || {};
  const handleDelete = () => {
    const filteredUsers = users.filter((u) => u.id !== user.id);
    setUsers(filteredUsers);
  };

  return (
    <div className='col-md-6 py-2'>
      <div className="card">
        <div className="card-body">
          <p className="card-title">{user.id}</p>
          <h5 className="card-title">{user.username}</h5>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
