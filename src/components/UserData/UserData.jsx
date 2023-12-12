import React from "react";

const UserData = (firstName, lastName, age) => {
  return (
    <div>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Age: {age}</li>
      </ul>
    </div>
  );
};

export default UserData;
