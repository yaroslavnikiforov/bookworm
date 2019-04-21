/**
 *
 * LoginForm component
 *
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../../messages/InlineError";

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    data: {
      email: "",
      password: ""
    },
    loadingState: false,
    errors: {}
  };

  onChange = e => {
    const target = e.target;

    this.setState(state => ({
      data: {
        ...state.data,
        [target.name]: target.value
      }
    }));
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (isEmpty(errors)) {
      this.props.onSubmit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};

    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid email";
    }

    if (!data.password) {
      errors.password = "Can't be blank";
    }

    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={Boolean(errors.email)}>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />

          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={Boolean(errors.password)}>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="make it secure"
            value={data.password}
            onChange={this.onChange}
          />

          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
