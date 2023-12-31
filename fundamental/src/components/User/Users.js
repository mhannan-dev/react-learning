// Users.js
import React, { useContext } from 'react';
import { UsersContext } from '../Context/UsersContext';
import User from './User';

const Users = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <div className='row'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
