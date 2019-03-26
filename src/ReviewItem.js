import React from "react";
import { Feed, Rating } from "semantic-ui-react";

const ReviewItem = ({
  rating,
  review,
  reviewer,
  reviewerAvatar,
  reviewdate
}) => {
  return (
    <Feed.Event>
      <Feed.Label>
        <img src={reviewerAvatar} alt="" />{" "}
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>{`${new Date(reviewdate).toLocaleDateString()}`}</Feed.Date>
        <Feed.Summary>
          <Rating icon="star" defaultRating={rating} maxRating={10} disabled />
        </Feed.Summary>
        <Feed.Extra>
          <a href="/">{reviewer} </a>said: {review}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ReviewItem;
