import React from "react";
import PropTypes from "prop-types";

const UserData = ({ firstName, lastName, age, myObject }) => {
  const newAge = age + 1;
  return (
    <div>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Age: {newAge}</li>
      </ul>
    </div>
  );
};

export default UserData;

//prop-types is used to check if a prop is defined or not, if something else is sent to the component, it will throw an error.
UserData.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number,
  myObject: PropTypes.shape({
    product: PropTypes.string,
    price: PropTypes.number,
  }),
};
