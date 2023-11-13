import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";

import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
