import React, { Component } from "react";
import { Header, Segment, Container, Breadcrumb } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class DashBoard extends Component {
  render() {
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home/</Breadcrumb.Section>
        </Breadcrumb>
        <Header> Home</Header>
        <Segment>
          <Header as="h1">
            <span role="img" aria-label="waving hand">
              👋
            </span>
            Welcome Back {localStorage.getItem("firstname")}!
          </Header>
        </Segment>
        <Segment>
          <Header as="h1">Suggestions</Header>
          <Header as="h3">
            Check out the books on your <Link to="userlib">bookshelf</Link>.
          </Header>
          <Header as="h3">
            See what your friends are reading in{" "}
            <Link to="community">community</Link>.
          </Header>
          <Header as="h3">
            Add more books to your shelf by{" "}
            <Link to="newbook">ISBN search</Link>.
          </Header>
          <Header as="h3">
            Make some changes to your <Link to="myinfo">account</Link>.
          </Header>
        </Segment>
      </Container>
    );
  }
}

export default DashBoard;
