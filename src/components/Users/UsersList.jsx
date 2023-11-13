import React, { useState } from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

import Button from "../UI/Button";

const UsersList = (props) => {
  const [editing, setEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) =>
          editing ? (
            <li key={user.id}>
              <Button
                onClick={() => {
                  setEditing(false);
                }}
              >
                Cancel
              </Button>
              <input
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              ></input>
              <Button onClick={(index) => {}}>Save</Button>
            </li>
          ) : (
            <li key={user.id}>
              <Button onClick={(index) => {}}>Delete</Button>
              {user.name} ({user.age} years old)
              <Button
                onClick={() => {
                  setEditing(true);
                }}
              >
                Edit
              </Button>
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
