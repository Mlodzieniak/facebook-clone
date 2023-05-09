/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../styles/event.css";
import { TextField, Button } from "@mui/material";
// import { Timestamp } from "firebase/firestore";
import Comment from "./Comment";

function Event({ eventData }) {
  const {
    text, imageURL, authorId, comments, creationDate,
  } = eventData;
  const [comment, setComment] = useState("");
  const date = creationDate.toDate(); // Convert timestamp to Date object
  const formattedDate = date.toLocaleDateString("en-GB"); // Format date as dd/mm/yyyy
  const formattedTime = date.toLocaleTimeString("en-US", { hour12: false }); // Format time as 24-hour format

  const formattedTimestamp = `${formattedDate} ${formattedTime}`;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendClick = () => {
    console.log(`Sending comment: ${comment}`);
    // TODO: Send the comment to the server
    setComment("");
  };
  return (
    <div className="event">
      <div className="data-wrapper">
        <div className="author">
          {`${authorId} announced at ${formattedTimestamp}:`}
          {/* announced at
          <div className="posted-at">{formattedTimestamp}</div>
          : */}
        </div>
        <p className="text">
          {text}
        </p>
      </div>
      <img
        className="event-image"
        src={imageURL}
        alt=""
      />
      <span className="divider" />

      <div className="data-wrapper">
        {comments.length
          ? <Comment /> : <p>No comments</p>}
      </div>
      <TextField
        value={comment}
        onChange={handleCommentChange}
        aria-label="comment"
        placeholder="Write a comment..."
      >
        <Button>Send</Button>
      </TextField>
      <Button onClick={handleSendClick} variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}

export default Event;
