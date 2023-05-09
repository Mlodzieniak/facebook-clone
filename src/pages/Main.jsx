import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";
// import { db } from "../firebase";

function Main() {
  const [comment, setComment] = useState("");
  // const [formData, setFormData] = useState({});
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="main-page">
      <Form method="post" className="create-event">
        <TextField
          value={comment}
          onChange={handleCommentChange}
          aria-label="comment"
          placeholder="Write a comment..."
        />
        <input type="file" name="file-loader" id="file-loader" />
        <Button type="submit" variant="contained">
          Post
        </Button>
      </Form>
      <ul className="events" />
    </div>
  );
}

export default Main;
