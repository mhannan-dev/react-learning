// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/User/Users';
import NewUser from './components/User/NewUser';
import { UsersContext } from './components/Context/UsersContext';

const App = () => {
  const [users, setUsers] = useState([
    { id: 5, username: "John Doe" },
    { id: 6, username: "Jane Doe" },
    { id: 7, username: "Alice" },
    { id: 8, username: "Bob" },
    { id: 9, username: "Charlie" },
    { id: 10, username: "Eve" },
  ]);

  const handleAddUser = (newUser) => {
    setUsers((prevUser) => [...prevUser, newUser]);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className='container'>
        <NewUser/>
        <Users/>
      </div>
    </UsersContext.Provider>
  );
};

export default App;
