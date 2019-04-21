/**
 *
 * LoginPage component
 *
 */

import React, { Component } from "react";

import LoginForm from "../../forms/LoginForm";

class LoginPage extends Component {
  submit = data => console.info("data: ", data);

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
