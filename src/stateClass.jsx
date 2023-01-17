import React, { Component } from "react";

export default class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
