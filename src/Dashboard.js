import React, { Component } from "react";
import { Header, Segment, Container, Breadcrumb } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class DashBoard extends Component {
  render() {
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
        </Breadcrumb>
        <Header> Dashboard</Header>
        <Segment>
          <Header as="h1">
            Welcome Back {localStorage.getItem("firstname")}!
          </Header>
          <Header as="h3">
            You have 5 books on your <Link to="userlib">bookshelf</Link>.
          </Header>
        </Segment>
        <Segment>
          <Header as="h1">Recently Added</Header>
        </Segment>
      </Container>
    );
  }
}

export default DashBoard;
