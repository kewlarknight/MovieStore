import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  //   username = React.createRef();

  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = event => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //call the server
    const username = this.state.username;
    console.log("Server call");
  };

  handleChange = event => {
    const account = { ...this.state.account };
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
