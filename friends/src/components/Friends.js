import React from "react";
import Friend from "./Friend";

class Friends extends React.Component {
  //   console.log(props.friends);
  render() {
    return (
      <div>
        <h1>Hello Hello</h1>
        {this.props.friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            occupation={friend.occupation}
          />
        ))}
      </div>
    );
  }
}

export default Friends;
