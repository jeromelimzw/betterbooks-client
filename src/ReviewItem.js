import React from "react";
import { Feed } from "semantic-ui-react";

const ReviewItem = ({
  rating,
  review,
  reviewer,
  reviewerAvatar,
  reviewdate
}) => {
  return (
    <Feed.Event>
      <Feed.Label image={reviewerAvatar} />
      <Feed.Content>
        <Feed.Date>{reviewdate}</Feed.Date>
        <Feed.Summary>
          <a href="/">{reviewer}</a> said: <br />
          {review}{" "}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
};

export default ReviewItem;
