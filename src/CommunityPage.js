import {
  Container,
  Header,
  Table,
  Breadcrumb,
  Icon,
  Grid,
  Feed,
  GridRow
} from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";

import React, { Component } from "react";

class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      reviews: []
    };
  }

  async componentDidMount() {
    this.getBooksInfo();
    this.getReviews();
  }

  async getBooksInfo() {
    try {
      const books = await fetch("http://localhost:8080/api/v1/books");
      const res = await books.json();
      !res.length === 0
        ? this.setState({ books: [] })
        : this.setState({ books: res });
    } catch (err) {
      console.log(err.message);
    }
  }

  async getReviews() {
    try {
      const reviews = await fetch(`http://localhost:8080/api/v1/reviews`);
      const allreviews = await reviews.json();
      !allreviews.length === 0
        ? this.setState({ reviews: [] })
        : this.setState({ reviews: allreviews });
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
            <Breadcrumb.Section link>Community</Breadcrumb.Section>
          </Breadcrumb>
          <Header>Community</Header>
          <h3>Other Users Are Reading:</h3>

          {books.map((a, index) => {
            return (
              <Link to={`/detailed/${a._id}`}>
                <img
                  src={a.imageUrl}
                  alt="book cover"
                  width="160"
                  height="240"
                  className="shadow-5 ma3 grow pointer"
                />
              </Link>
            );
          })}

          <h3>Recent Reviews:</h3>
          <Feed>
            {this.state.reviews.map((a, index) => (
              <ReviewItem
                rating={a.score}
                review={a.review}
                reviewer={a.user.username}
                reviewerAvatar={a.user.avatarimgURL}
                reviewdate={a.time}
              />
            ))}
          </Feed>
        </Container>
      </React.Fragment>
    );
  }
}

export default CommunityPage;
