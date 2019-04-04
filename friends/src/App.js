import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Friends from "./components/Friends";
import PostFriendForm from "./components/PostFriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  postFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <PostFriendForm postFriend={this.postFriend} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
