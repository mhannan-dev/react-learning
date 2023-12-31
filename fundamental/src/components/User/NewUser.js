import React, { useState } from 'react';
import { useUsersContext } from '../hooks/useUsersContext';


const NewUser = () => {
  const { users, setUsers } = useUsersContext() || {};
 
  const [username, setUserName] = useState('');

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      username: username
    };
    setUsers((prevUsers) => [...prevUsers, newUser]); 
    setUserName('');
  };

  return (
    <>
      <form className="row g-3 mt-2" onSubmit={handleSave}>
        <div className="col-auto">
          <label htmlFor="username" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required  
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default NewUser;
