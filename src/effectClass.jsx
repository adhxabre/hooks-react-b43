import React, { Component } from "react";

export default class EffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      user: {
        email: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    console.log("Effect Class Did Mount");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("Effect Class Did Update");
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log("Effect Class Will Unmount");
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    this.setState({
      isLogin: true,
      user: {
        email,
        password,
      },
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        {this.state.isLogin ? (
          <h1>You're already logged in!</h1>
        ) : (
          <h1>You're not logged in!</h1>
        )}
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
