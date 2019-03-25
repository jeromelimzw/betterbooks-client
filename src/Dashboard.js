import React from "react";
import { Header, Segment, Container, Breadcrumb } from "semantic-ui-react";

const Dashboard = () => (
  <Container className="mv7 animated fadeIn">
    <Breadcrumb size="big">
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
    </Breadcrumb>
    <Header> Dashboard</Header>
    <Segment>
      <Header as="h1">Welcome back Daniel!</Header>
      <Header as="h3">You have read 5 books so far.</Header>
      <Header as="h3">
        You are 5 books away from your target of 10 books this year.
      </Header>
    </Segment>
    <Segment>
      <Header as="h1">Recently Added</Header>
    </Segment>
  </Container>
);

export default Dashboard;
