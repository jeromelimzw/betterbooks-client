import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Container,
  Breadcrumb,
  Modal
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
          <Form.Field>
            <label>
              Referral Token{"  "}
              <Modal
                trigger={
                  <span href="#" className="blue hover-dark-blue pointer">
                    (?)
                  </span>
                }
                dimmer="blurring"
                closeIcon
              >
                <Modal.Header>Referral Token</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header>Why is a referral token required?</Header>
                    <p>
                      Due to overwhelming interest, as well as to maintain the
                      quality of the book-reading community, <br />a referral
                      code from an existing member is required.
                      <br /> We apologise for the inconvenience caused and hope
                      for your understanding.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </label>
            <input placeholder="Referral Token" />
          </Form.Field>
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
            <input type="email" placeholder="e-mail" />
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
