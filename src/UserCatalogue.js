import {
  Container,
  Header,
  Table,
  Breadcrumb,
  Icon,
  Grid
} from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";
import "./global";

import React, { Component } from "react";

class UserCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    this.getBooksInfo();
  }

  async getBooksInfo() {
    const username = localStorage.getItem("username");
    try {
      const books = await fetch(`${global.server}api/v1/users/${username}`);
      const res = await books.json();
      console.log(res);
      !res.length === 0
        ? this.setState({ books: [] })
        : this.setState({ books: res.books });
    } catch (err) {
      console.log(err.message);
    }
  }

  async handleDeleteBook(id) {
    try {
      await fetch(`${global.server}api/v1/books/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: localStorage.getItem("username")
        })
      });
      this.getBooksInfo();
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { books } = this.state;
    return (
      <React.Fragment>
        <Container className="mv7 animated fadeInUp">
          <Breadcrumb size="big">
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section link>Bookshelf</Breadcrumb.Section>
          </Breadcrumb>
          <Header>Your Bookshelf</Header>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Brief Description</Table.HeaderCell>
                <Table.HeaderCell>Author(s)</Table.HeaderCell>
                <Table.HeaderCell>Genre</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body unstackable>
              {books.length === 0 ? (
                <h3>Your shelf is empty.</h3>
              ) : (
                books.map((a, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Icon
                          name="delete"
                          color="grey"
                          className="pointer grow-large hover-black"
                          onClick={() => this.handleDeleteBook(a._id)}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <Link to={`/detailed/${a._id}`}>
                          <img
                            src={a.imageUrl}
                            alt="book cover"
                            width="120"
                            className="shadow-5"
                          />
                        </Link>
                      </Table.Cell>

                      <Table.Cell className="fw7">{a.title}</Table.Cell>
                      <Table.Cell>{`${a.description.substring(
                        0,
                        80
                      )}...`}</Table.Cell>
                      <Table.Cell>{a.authors.join(" , ")}</Table.Cell>
                      <Table.Cell>
                        {a.genres.length === 0 ? "General" : a.genres}
                      </Table.Cell>

                      <Table.Cell>
                        <Link to={`/detailed/${a._id}`}>
                          <span className="ba br3 bg-green white hover-bg-dark-green hover-white ph2 pv1 pointer">
                            Details
                          </span>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              )}
            </Table.Body>
          </Table>
          <Grid centered padded="vertically" className="gray">
            <Link to="/newbook">
              <Icon
                circular
                inverted
                name="plus"
                size="big"
                color="teal"
                className="grow-large shadow-5"
              />
            </Link>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default UserCatalogue;
