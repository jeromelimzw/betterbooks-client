import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Container,
  Header,
  Form,
  Button,
  Image,
  Breadcrumb,
  TextArea,
  Modal
} from "semantic-ui-react";
import langCodes from "./utils/langCodeConverter";

class AddNewBook extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isbn: "",
      error: undefined
    };
  }

  async getBookInfo() {
    try {
      const book = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.isbn.replace(
          /-/g,
          ""
        )}`
      );
      const res = await book.json();
      !res.totalItems
        ? this.setState({ error: "invalid ISBN", data: [] })
        : this.state.isbn === ""
        ? this.setState({ error: "ISBN is required", data: [] })
        : this.setState({
            data: [res.items[0].volumeInfo],
            error: undefined
          });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSubmit = event => {
    this.setState({ data: [] });
    this.getBookInfo();
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ isbn: event.target.value });
  };

  handleAddToShelf = async () => {
    try {
      await fetch(`${global.server}api/v1/books`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          authors: this.state.data[0].authors,
          genres: this.state.data[0].categories,
          title: this.state.data[0].title,
          type: this.state.data[0].printType,
          publishedDate: this.state.data[0].publishedDate,
          language: this.state.data[0].language,
          publisher: this.state.data[0].publisher,
          ISBN13: this.state.data[0].industryIdentifiers[0].identifier,
          description: this.state.data[0].description,
          imageUrl: this.state.data[0].imageLinks.thumbnail,
          username: localStorage.getItem("username")
        })
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <Container className="mv7 animated fadeIn">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Admin</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Media Catalogue</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Add New Book</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Add New Book</Header>
        <Form
          className=" shadow-5 pa4 ba b--transparent bg-moon-gray bw2 "
          onSubmit={this.handleSubmit}
        >
          {this.state.data.map((a, index) => (
            <React.Fragment key={index}>
              <Form.Field>
                <Image
                  src={
                    !a.imageLinks ? "img/nocover.jpg" : a.imageLinks.thumbnail
                  }
                  className="mb4 br3 shadow-5 "
                  width="200"
                  height="300"
                />
              </Form.Field>

              <Form.Field>
                <label>Title</label>
                <input value={a.title} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Author(s)</label>
                <input value={a.authors.join("  ,  ")} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <TextArea
                  value={a.description}
                  rows="7"
                  readOnly
                  className="pv3"
                />
              </Form.Field>
              <Form.Field>
                <label>Media Type</label>
                <input value={a.printType} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Genre(s)</label>
                <input value={a.categories} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Published Date</label>
                <input value={a.publishedDate} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Publisher(s)</label>
                <input value={a.publisher} readOnly />
              </Form.Field>

              <Form.Field>
                <label>Language</label>
                <input
                  value={`${
                    langCodes.find(
                      b => b.langCode === a.language.substring(0, 2)
                    ).langEndonym
                  }`}
                  readOnly
                />
              </Form.Field>
            </React.Fragment>
          ))}

          <Form.Field>
            <label>ISBN Search</label>
            <input onChange={this.handleChange} />
            <Button type="submit" color="google plus">
              ISBN Search
            </Button>
            {this.state.error && (
              <span className="fw7 red bg-black ph3 pv2 br2">
                {this.state.error}
              </span>
            )}
          </Form.Field>
          {this.state.data.length === 1 ? (
            <Form.Field className="flex justify-around">
              <Link to="/newbook">
                <Modal
                  trigger={
                    <Button onClick={this.handleAddToShelf} color="google plus">
                      Add to Shelf
                    </Button>
                  }
                  dimmer="blurring"
                >
                  {" "}
                  <Modal.Header>Adding Book to Shelf</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <h4>
                        The book has been added to your bookshelf
                        <br />
                        Would you like to go there now?
                      </h4>
                      <Link to="userlib">
                        <Button>Go to Bookshelf</Button>
                      </Link>{" "}
                      <Link to="newbook">
                        <Button
                          onClick={() => window.location.reload()}
                          color="google plus"
                        >
                          Add Another Book
                        </Button>
                      </Link>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Link>
            </Form.Field>
          ) : (
            undefined
          )}
        </Form>
      </Container>
    );
  }
}

export default AddNewBook;
