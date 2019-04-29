import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import { isEmpty } from "lodash";
import InlineError from "../../messages/InlineError";

class ResetPasswordForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  };

  state = {
    data: {
      token: this.props.token,
      password: "",
      passwordConfirmation: ""
    },
    loading: false,
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

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors,
          loading: false
        })
      );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.password) {
      errors.password = "Can't be blank";
    }

    if (data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords don't match";
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={Boolean(errors.password)}>
          <label htmlFor="password">New password</label>

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

        <Form.Field error={Boolean(errors.passwordConfirmation)}>
          <label htmlFor="passwordConfirmation">Confirm password</label>

          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="type it again"
            value={data.passwordConfirmation}
            onChange={this.onChange}
          />

          {errors.passwordConfirmation && (
            <InlineError text={errors.passwordConfirmation} />
          )}
        </Form.Field>

        <Button primary>Reset password</Button>
      </Form>
    );
  }
}

export default ResetPasswordForm;
