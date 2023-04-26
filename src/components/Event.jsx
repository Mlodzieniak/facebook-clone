import React, { useState } from "react";
import "../styles/event.css";
import { TextField, Button } from "@mui/material";
import Comment from "./Comment";

function Event() {
  const [comment, setComment] = useState("");

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
        <div className="author">John Smith announced:</div>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          corrupti est, molestiae deleniti iure tempora et esse, perferendis
          doloribus minus aperiam? Dolores alias earum rem temporibus, ipsam sed
          natus totam!
        </p>
      </div>
      <img
        className="event-image"
        src="https://energylandia.pl/wp-content/uploads/2017/04/co-to-jest-event-firmowy-scaled.jpg"
        alt=""
      />
      <span className="divider" />

      <div className="data-wrapper">
        <p>Last Comment:</p>
        <Comment />
      </div>
      <TextField
        value={comment}
        onChange={handleCommentChange}
        aria-label="comment"
        placeholder="Write a comment..."
        rowsMin={3}
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
