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
        <Feed.Date>
          {`${new Date(reviewdate).toLocaleString()}`}
          <Rating
            icon="heart"
            defaultRating={rating}
            maxRating={5}
            disabled
            className="blue"
          />
        </Feed.Date>
        <Feed.Summary>
          <a href="/">{reviewer} </a>said: {review}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ReviewItem;
