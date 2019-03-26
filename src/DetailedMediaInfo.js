import React, { Component } from "react";
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
    this.state = { book: [], reviews: [] };
  }

  async componentDidMount() {
    await this.getBookInfo();
  }

  async getBookInfo() {
    const bookId = this.props.match.url.substring(10);
    const oneBook = await fetch(`http://localhost:8080/api/v1/books/${bookId}`);
    const book = await oneBook.json();
    const getReviews = await fetch(
      `http://localhost:8080/api/v1/reviews/${bookId}`
    );
    const reviews = await getReviews.json();
    this.setState({ book, reviews });
  }

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
      imageUrl
    } = this.state.book;
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
            <span className="mr3 fw7">Year:</span>{" "}
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
              {this.state.reviews.length > 0 ? (
                this.state.reviews.map((a, index) => (
                  <ReviewItem
                    rating={a.score}
                    review={a.review}
                    reviewer={a.user.username}
                    reviewerAvatar={a.user.avatarimgURL}
                    reviewdate={a.time}
                  />
                ))
              ) : (
                <h4>Be the first to review this book.</h4>
              )}
            </Feed>
          </Segment>
        </Segment.Group>
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
                  <Rating
                    icon="star"
                    defaultRating={5}
                    maxRating={10}
                    className="blue"
                  />
                </FormField>
                <FormField>
                  <label>Review:</label>
                  <textarea
                    placeholder="write your review here"
                    cols="70"
                    rows="3"
                  />
                </FormField>
              </Form>
              <br />
              <Button>Submit Review</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Container>
    );
  }
}

export default DetailedMediaInfo;
