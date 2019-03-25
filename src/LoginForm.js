import { Button, Form, Header, Container, Breadcrumb } from "semantic-ui-react";
import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChangeUserName = event => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { handleChangePassword, handleChangeUserName, handleSubmit } = this;
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Login</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Login</Header>
        <Form
          className="shadow-5 pa4 ba b--transparent bg-moon-gray bw2"
          onSubmit={handleSubmit}
        >
          <Form.Field>
            <label>User Name</label>
            <input placeholder="User Name" onChange={handleChangeUserName} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChangePassword}
            />
          </Form.Field>

          <Button type="submit" color="google plus">
            Submit
          </Button>

          <Link to="register">
            <span className="ml4">Sign-Up Here ...</span>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;