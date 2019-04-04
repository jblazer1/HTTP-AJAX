import React from "react";

class PostFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: "",
        occupation: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  postFriend = event => {
    event.preventDefault();
    this.props.postFriend(this.state.friend);
  };

  render() {
    return (
      <div className="friends-form">
        <h2>POST (add) a new friend</h2>
        <form onSubmit={this.postFriend}>
          <input
            type="text"
            name="name"
            placeholder="Friend Name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />
          <input
            type="text"
            name="occupation"
            placeholder="occupation"
            onChange={this.handleChange}
            value={this.state.friend.occupation}
          />
          <button className="friends-btn" type="submit">
            POST Friend
          </button>
        </form>
      </div>
    );
  }
}

export default PostFriendForm;
