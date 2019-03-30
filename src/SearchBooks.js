import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Container,
  Header,
  Form,
  Button,
  Breadcrumb,
  Input,
  Table,
  Icon,
  Select
} from "semantic-ui-react";

const options = [
  { key: "all", text: "All", value: "All" },
  { key: "author", text: "Author(s)", value: "inauthor:" },
  { key: "title", text: "Title", value: "title:" },
  { key: "isbn", text: "ISBN", value: "isbn:" }
];

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      data: [],
      searchfield: "",
      error: undefined,
      selector: ""
    };
  }

  handleSearchField = event => {
    this.setState({ searchfield: event.target.value });
  };

  getBooksInfo = async () => {
    try {
      const books =
        this.state.searchfield &&
        (await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.selector
          }${this.state.searchfield}`,
          {
            credentials: "include"
          }
        ));
      const res = await books.json();
      console.log(res);
      res.totalItems === 0
        ? this.setState({ error: "no books matching query found", books: [] })
        : this.setState({
            books: res.items,
            error: undefined
          });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSubmit = event => {
    this.setState({ data: [] });
    this.getBooksInfo();

    event.preventDefault();
  };

  handleSelector = (event, { value }) => {
    this.setState({ selector: value });
    this.state.searchfield.length !== 0 && this.getBooksInfo();
  };

  render() {
    const { handleSearchField, handleSelector, handleSubmit } = this;
    const { books } = this.state;
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Add New Book</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Search for Books</Header>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Search..."
            fluid
            onChange={handleSearchField}
            className="w-80"
          >
            <input />
            <Select
              options={options}
              defaultValue="title:"
              onChange={handleSelector}
            />
            <Button type="submit">
              <Icon name="search" />
            </Button>
          </Input>
        </Form>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Brief Description</Table.HeaderCell>
              <Table.HeaderCell>Author(s)</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body unstackable="true">
            {books.length === 0 ? (
              <Table.Row>
                <Table.Cell>No search results matching query</Table.Cell>
              </Table.Row>
            ) : (
              books
                .filter(a => a.volumeInfo.industryIdentifiers)
                .map((a, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Link
                          to={`/newbook/${
                            a.volumeInfo.industryIdentifiers[0].identifier
                          }`}
                        >
                          <img
                            src={
                              !a.volumeInfo.imageLinks
                                ? "img/nocover.jpg"
                                : a.volumeInfo.imageLinks.thumbnail
                            }
                            alt="book cover"
                            width="120"
                            className="shadow-5"
                          />
                        </Link>
                      </Table.Cell>

                      <Table.Cell className="fw7">
                        {a.volumeInfo.title}
                      </Table.Cell>
                      <Table.Cell>{`${a.volumeInfo.description &&
                        a.volumeInfo.description.substring(
                          0,
                          80
                        )}...`}</Table.Cell>
                      <Table.Cell>
                        {!a.volumeInfo.authors
                          ? ""
                          : a.volumeInfo.authors.join(" , ")}
                      </Table.Cell>
                      <Table.Cell>
                        {!a.volumeInfo.genres ? "General" : a.volumeInfo.genres}
                      </Table.Cell>

                      <Table.Cell>
                        <Link
                          to={`/newbook/${
                            a.volumeInfo.industryIdentifiers[0].identifier
                          }`}
                        >
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
      </Container>
    );
  }
}

export default SearchBooks;
