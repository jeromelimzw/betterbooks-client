import React from "react";
import {
  Container,
  Header,
  Form,
  Button,
  Image,
  Breadcrumb,
  Table,
  Icon
} from "semantic-ui-react";
import books from "./static/booksDB";

const EditMediaInformation = () => {
  return (
    <Container className="mv5">
      <Breadcrumb size="big">
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Admin</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Media Catalogue</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Edit Media Information</Breadcrumb.Section>
      </Breadcrumb>
      <Header>Edit Media Information</Header>
      <Form className=" shadow-5 pa4 ba b--transparent bg-moon-gray bw2 ">
        <Form.Field className="flex justify-between">
          <Image
            src={books[1].imgUrl}
            className="mb4 br3 shadow-5 "
            width="200"
            height="300"
          />
          <Icon
            name="trash alternate"
            value="delete user"
            size="big"
            className="pointer hover-red"
          />
        </Form.Field>

        <Form.Field>
          <label>Title</label>
          <input value="Harry Potter and The Order of the Phoenix" disabled />
        </Form.Field>
        <Form.Field>
          <label>Author(s)</label>
          <input value="J.K. Rowling" disabled />
        </Form.Field>
        <Form.Field>
          <label>Image Url</label>
          <input value="img/HPCover.jpg" disabled />
        </Form.Field>
        <Form.Field>
          <label>Media Type</label>
          <input value="Book" disabled />
        </Form.Field>
        <Form.Field>
          <label>Genre(s)</label>
          <input value="Fantasy" disabled />
        </Form.Field>
        <Form.Field>
          <label>Year</label>
          <input value="2008" disabled />
        </Form.Field>
        <Form.Field>
          <label>Publisher(s)</label>
          <input value="Scholastic" disabled />
        </Form.Field>
        <Form.Field>
          <label>Language</label>
          <input value="English" disabled />
        </Form.Field>
        <Form.Field>
          <label>ISBN</label>
          <input value="9780545582971" />
          <Button type="submit" color="google plus">
            ISBN Search
          </Button>
        </Form.Field>

        <Form.Field className="flex justify-around">
          <Button type="submit" color="google plus">
            Update
          </Button>
        </Form.Field>
      </Form>
    </Container>
  );
};

export default EditMediaInformation;
