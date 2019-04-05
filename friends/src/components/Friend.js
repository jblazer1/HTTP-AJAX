import React from "react";

const Friend = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>age: {props.age}</h3>
      <h3>email: {props.email}</h3>
      <h3>occupation: {props.occupation}</h3>
    </div>
  );
};

export default Friend;
