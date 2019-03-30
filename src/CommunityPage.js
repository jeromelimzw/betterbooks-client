import { Container, Header, Breadcrumb, Feed, Grid } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import React, { Component } from "react";

class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    await this.getBooksInfo();
  }

  async getBooksInfo() {
    try {
      const books = await fetch(`${global.server}api/v1/books`, {
        credentials: "include"
      });
      const res = await books.json();
      !res.length === 0
        ? this.setState({ books: [] })
        : this.setState({ books: res });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { books } = this.state;

    return (
      <React.Fragment>
        <Container className="mv7 animated fadeIn">
          <Breadcrumb size="big">
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section link>Community</Breadcrumb.Section>
          </Breadcrumb>
          <Header>Community</Header>
          <h3>Other Users Are Reading:</h3>

          {books
            .reverse()
            .slice(0, 10)
            .map((a, index) => {
              return (
                <Link to={`/detailed/${a._id}`} key={index}>
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

          <Grid columns="5" divided>
            {books
              .filter(a => a.reviews.length !== 0)
              .reverse()
              .slice(0, 4)
              .map((a, index) => (
                <Grid.Row key={index}>
                  <Grid.Column>
                    <Link to={`/detailed/${a._id}`}>
                      <img
                        src={a.imageUrl}
                        alt="book cover"
                        width="140"
                        height="200"
                        className="shadow-5 ma3 grow pointer"
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Feed>
                      {a.reviews
                        .reverse()
                        .slice(0, 3)
                        .map((a, index) => (
                          <ReviewItem
                            key={index}
                            rating={a.score}
                            review={a.review}
                            reviewer={a.user.username}
                            reviewerAvatar={a.user.avatarimgURL}
                            reviewdate={a.time}
                          />
                        ))}
                    </Feed>
                  </Grid.Column>
                </Grid.Row>
              ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default CommunityPage;
