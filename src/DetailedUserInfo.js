import React, { Component } from "react";
import {
  Container,
  Header,
  Form,
  Image,
  Breadcrumb,
  Icon,
  Modal
} from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class DetailedUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      lastname: "",
      firstname: "",
      avatarimgURL: ""
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    this.setState({
      username: localStorage.getItem("username"),
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      email: localStorage.getItem("email"),
      avatarimgURL: localStorage.getItem("avatarimgURL")
    });
  }

  async handleSignOut() {
    try {
      await window.localStorage.clear();
      await fetch("https://betterbooks-server.herokuapp.com/logout");
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { avatarimgURL, firstname, lastname, username, email } = this.state;
    return (
      <Container className="mv7 animated fadeInUp">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Personal Information</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Personal Information</Header>
        <Form className=" shadow-5 pa4 ba b--transparent bg-moon-gray bw2 ">
          <Form.Field className="flex justify-between">
            <Image
              src={avatarimgURL}
              width="200"
              height="200"
              className="mb4 br-100 shadow-5 ba b--white bw2 pointer"
            />
            <Modal
              trigger={
                <Icon
                  name="user delete"
                  value="delete user"
                  size="big"
                  className="pointer hover-red"
                />
              }
              dimmer="blurring"
              size="small"
            >
              <Modal.Content>
                Account deletion is not supported at this time.
                <br />
                Please try again at another time
              </Modal.Content>
            </Modal>
          </Form.Field>

          <Form.Field>
            <label>First Name</label>
            <input value={firstname} readOnly />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input value={lastname} readOnly />
          </Form.Field>
          <Form.Field>
            <label>User Name</label>
            <input placeholder={username} />
          </Form.Field>
          <Form.Field>
            <label>e-mail</label>
            <input placeholder="e-mail" value={email} />
          </Form.Field>
          <Form.Field>
            <label>Old Password</label>
            <input placeholder="enter old password" type="password" />
          </Form.Field>
          <Form.Field>
            <label>New Password</label>
            <input placeholder="enter new password" type="password" />
          </Form.Field>
          <Form.Field className="flex justify-around">
            <Modal
              trigger={
                <div className="f3 ph3 pv2 bg-blue white br3 shadow-5 hover-bg-dark-blue pointer">
                  <Icon name="pencil" />
                  Update
                </div>
              }
              dimmer="blurring"
              size="tiny"
            >
              <Modal.Content>Your details have been updated.</Modal.Content>
            </Modal>
            <Link to="/login">
              <div className="f3 ph3 pv2 bg-light-red white br3 shadow-5 hover-bg-dark-red pointer">
                <Icon name="sign-out" onClick={this.handleSignOut} />
                Sign Out
              </div>
            </Link>
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default DetailedUserInfo;
