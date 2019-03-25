import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Container,
  Breadcrumb,
  Dimmer,
  Icon
} from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Sign Up</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Sign Up</Header>
        <Form className=" shadow-5 pa4 ba b--transparent bg-moon-gray bw2">
          <Dimmer active>
            <Header as="h1" inverted>
              Sorry.
              <br />
              Due to overwhelming interest.
              <br />
              We are closing registration temporarily.
            </Header>
          </Dimmer>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>e-mail</label>
            <input placeholder="e-mail" />
          </Form.Field>
          <Form.Field>
            <label>Tel. No.</label>
            <input placeholder="Tel. No." />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <label>Enter Password Again</label>
            <input type="password" placeholder="Password" />
          </Form.Field>

          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Link to="login">
            <Button type="submit" color="google plus">
              Submit
            </Button>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default SignUpForm;
