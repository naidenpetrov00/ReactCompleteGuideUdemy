import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    console.log(user);
    setUsers((prev) => {
      return [...prev, user];
    });
    console.log(users);
  };

  return (
    <React.Fragment>
      <AddUser onSubmit={addUser} />
      {users.length > 0 && <UsersList users={users} />}
    </React.Fragment>
  );
};

export default App;
