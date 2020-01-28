import React, { Component } from "react";

class LoginForm extends Component {
  //   username = React.createRef();

  state = {
    account: { username: "", password: "" }
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = event => {
    event.preventDefault();

    //call the server
    const username = this.state.username;
    console.log("Server call");
  };

  handleChange = event => {
    const account = { ...this.state.account };
    account.username = event.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
