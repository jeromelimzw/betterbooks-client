import React, { Component } from "react";
import avatarIMG from "./utils/avatarIMG";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Container,
  Breadcrumb,
  Modal,
  Icon
} from "semantic-ui-react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      avatarimgURL: "",
      email: "",
      password1: "",
      password2: "",
      showPassword: false
    };
  }

  handleAvatar = event => {
    this.setState({ avatarimgURL: event.target.src });
  };

  handleFirstName = event => {
    this.setState({ firstname: event.target.value });
  };
  handleLastName = event => {
    this.setState({ lastname: event.target.value });
  };
  handleUserName = event => {
    this.setState({ username: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handlePassword1 = event => {
    this.setState({ password1: event.target.value });
  };
  handlePassword2 = event => {
    this.setState({ password2: event.target.value });
  };
  togglePasswordView = event => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmit = async event => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    if (
      this.state.password1 !== this.state.password2 ||
      this.state.password1 === ""
    ) {
      alert("passwords do not match");
    } else {
      try {
        const res = await fetch(`${global.server}register`, {
          credentials: "include",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password1,
            avatarimgURL: this.state.avatarimgURL
          })
        });
        const { status } = await res;
        if (status === 500) {
          alert(`account not created\nplease ensure all fields are filled`);
        } else if (status === 401) {
          alert("chosen username has been taken");
        } else {
          alert(
            `Welcome ${this.state.firstname}! \nRedirecting to login page...`
          );
          this.props.history.push("/login");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  render() {
    const {
      handleAvatar,
      handleEmail,
      handleFirstName,
      handleLastName,
      handlePassword1,
      handlePassword2,
      handleSubmit,
      handleUserName,
      togglePasswordView
    } = this;
    const { showPassword, avatarimgURL } = this.state;

    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Sign Up</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Sign Up</Header>

        <Form
          className=" shadow-5 pa4 ba b--transparent bg-moon-gray bw2"
          onSubmit={handleSubmit}
        >
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" onChange={handleFirstName} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" onChange={handleLastName} />
          </Form.Field>
          <Form.Field>
            <label>User Name</label>
            <input placeholder="User Name" onChange={handleUserName} />
          </Form.Field>
          <Form.Field>
            <label>e-mail</label>
            <input type="email" placeholder="e-mail" onChange={handleEmail} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handlePassword1}
            />
          </Form.Field>
          <Form.Field>
            <label>
              Enter Password Again{"     "}
              <span>
                <Icon
                  name={showPassword ? "eye " : "eye slash"}
                  onClick={togglePasswordView}
                  size="large"
                  className={`pointer ${showPassword ? undefined : "gray"}`}
                />
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handlePassword2}
            />
          </Form.Field>
          <Form.Field>
            <label>Avatar</label>
            {avatarimgURL !== "" ? (
              <img
                src={avatarimgURL}
                width="100"
                alt="avatar"
                className="br-100 ma1 b--gold bw2 ba shadow-5"
              />
            ) : (
              <h5 className="gray">No avatar selected ...</h5>
            )}

            <Modal
              trigger={
                <p className="ph3 pv2 ba br2 b--transparent bg-white pointer">
                  Select Avatar
                </p>
              }
              dimmer="blurring"
              closeIcon
            >
              <Modal.Content>
                <h3>Pick An Avatar:</h3>
                {avatarIMG.map((a, index) => (
                  <img
                    key={index}
                    src={a}
                    width="100"
                    alt="avatar"
                    className="br-100 ma1 pointer grow shadow-5 animated fadeIn"
                    onClick={handleAvatar}
                  />
                ))}
                <h3>Selected Avatar:</h3>
                {avatarimgURL !== "" ? (
                  <img
                    src={avatarimgURL}
                    width="100"
                    alt="avatar"
                    className="br-100 ma1 b--gold bw2 ba shadow-5"
                  />
                ) : (
                  undefined
                )}
              </Modal.Content>
            </Modal>
          </Form.Field>

          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" checked />
          </Form.Field>

          <Button type="submit" color="google plus">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUpForm;
