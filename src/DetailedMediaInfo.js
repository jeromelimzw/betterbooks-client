import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import {
  Container,
  Segment,
  Image,
  Header,
  Breadcrumb,
  Button,
  Feed,
  Modal,
  FormField,
  Form,
  Rating
} from "semantic-ui-react";
import langCodes from "./utils/langCodeConverter";

class DetailedMediaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { book: [], user: "", review: "", rating: "" };
  }

  async componentDidMount() {
    await this.getBookInfo();
  }

  getBookInfo = async () => {
    const bookId = this.props.match.url.substring(10);
    const oneBook = await fetch(`${global.server}api/v1/books/${bookId}`, {
      credentials: "include"
    });
    const book = await oneBook.json();
    this.setState({ book });
  };

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });
  handleChangeReview = event => this.setState({ review: event.target.value });

  addReview = async () => {
    const bookId = this.props.match.url.substring(10);
    try {
      await fetch(`${global.server}api/v1/books/${bookId}`, {
        credentials: "include",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: localStorage.getItem("id"),
          review: this.state.review,
          score: this.state.rating
        })
      });
      this.getBookInfo();
      //   window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  handleAddToShelf = async () => {
    try {
      await fetch(`${global.server}api/v1/books`, {
        credentials: "include",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.state.book.title,
          username: localStorage.getItem("username")
        })
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const {
      title,
      authors,
      type,
      publishedDate,
      genres,
      language,
      publisher,
      description,
      ISBN13,
      imageUrl,
      reviews
    } = this.state.book;
    const {
      handleAddToShelf,
      handleChangeReview,
      handleRate,
      addReview
    } = this;
    return (
      <Container className="mv7 scrolling animated fadeInUp">
        <Breadcrumb size="big">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Media Catalogue</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>Media Details</Breadcrumb.Section>
        </Breadcrumb>
        <Header>Media Details</Header>
        <Container>
          <Image
            src={imageUrl}
            className=" br3 shadow-5"
            width="220"
            height="330"
          />
        </Container>
        <Segment.Group raised>
          <Segment>
            <span className="mr3 fw7">Title:</span> {title}
          </Segment>
          <Segment>
            <span className="mr3 fw7">Author(s):</span>{" "}
            {authors &&
              authors.map(a => (
                <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer mh1">
                  {a}
                </span>
              ))}
          </Segment>
          <Segment>
            <span className="mr3 fw7">Media Type:</span>{" "}
            <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer">
              {type}
            </span>
          </Segment>
          <Segment>
            <span className="mr3 fw7">Published:</span>{" "}
            <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer">
              {publishedDate}
            </span>
          </Segment>
          <Segment>
            <span className="mr3 fw7">Genre(s):</span>{" "}
            <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer">
              {genres ? genres : "Generic"}
            </span>
          </Segment>
          <Segment>
            <span className="mr3 fw7">Language:</span>{" "}
            <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer">
              {language &&
                langCodes.find(a => a.langCode === language).langEndonym}
            </span>
          </Segment>
        </Segment.Group>
        <Segment.Group raised>
          <Segment>
            <span className="mr3 fw7">Publisher:</span>
            <span className="ba br3 b--blue blue hover-bg-blue hover-white ph2 pv1 pointer">
              {!publisher ? "General Publishers" : publisher}
            </span>
          </Segment>
          <Segment>
            <span className="mr3 fw7">ISBN:</span> {ISBN13}
          </Segment>
        </Segment.Group>
        <Segment raised>
          <div className="fw7">Description:</div>
          <p className="lh-copy">{description}</p>
        </Segment>
        <Segment.Group raised>
          <Segment>
            <div className="fw7">Reviews:</div>
          </Segment>
          <Segment>
            <Feed>
              {!reviews ? (
                undefined
              ) : reviews.length > 0 ? (
                reviews.map((a, index) => (
                  <ReviewItem
                    rating={a.score}
                    review={a.review}
                    reviewer={!a.user ? "deleted user" : a.user.username}
                    reviewerAvatar={
                      !a.user ? "img/deleteduser.jpg" : a.user.avatarimgURL
                    }
                    reviewdate={a.time}
                  />
                ))
              ) : (
                <h4>Be the first to review this book.</h4>
              )}
            </Feed>
          </Segment>
        </Segment.Group>
        {localStorage.getItem("username") ? (
          <React.Fragment>
            <Modal
              trigger={<Button color="teal">Review this Book</Button>}
              dimmer="blurring"
              closeIcon
            >
              <Modal.Header>Review this Book</Modal.Header>
              <Modal.Content image>
                <Image wrapped size="small" src={imageUrl} />
                <Modal.Description>
                  <p className="f3 mb0">{title}</p>
                  <p className="f5 mb2 gray">By: {authors}</p>
                  <Form>
                    <FormField>
                      <label>Score:</label>
                      <Rating icon="star" maxRating={10} onRate={handleRate} />
                    </FormField>
                    <FormField>
                      <label>Review:</label>
                      <textarea
                        placeholder="write your review here"
                        cols="70"
                        rows="3"
                        onChange={handleChangeReview}
                      />
                    </FormField>
                  </Form>
                  <br />
                  <Modal
                    trigger={<Button onClick={addReview}>Submit Review</Button>}
                    dimmer="blurring"
                    size="tiny"
                  >
                    <Modal.Content>
                      <Modal.Description>
                        <p className="f3">
                          Your review has been submitted. <br />
                          Thank You.
                        </p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Modal
              trigger={
                <Button onClick={handleAddToShelf} color="google plus">
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
                  <Link to="/userlib">
                    <Button>Go to Bookshelf</Button>
                  </Link>
                  <Link to="/community">
                    <Button color="google plus">Continue Browsing</Button>
                  </Link>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </React.Fragment>
        ) : (
          <Link to="/login">
            <Button>Login to Proceed</Button>
          </Link>
        )}
      </Container>
    );
  }
}

export default DetailedMediaInfo;
