import React from "react";

const Friends = props => {
  //   console.log(props.friends);
  return (
    <div>
      <h1>Hello Hello</h1>
      {props.friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <h3>age: {friend.age}</h3>
          <h3>email: {friend.email}</h3>
          <h3>occupation: {friend.occupation}</h3>
        </div>
      ))}
    </div>
  );
};

export default Friends;
