import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

function Main() {
  const [comment, setComment] = useState("");
  const [file, setFile] = useState("");
  const [imageRef, setImageRef] = useState(null);

  // const [formData, setFormData] = useState({});
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const snapshot = await uploadBytes(imageRef, file);
    console.log(snapshot);
  };
  const handleFileUpdate = (event) => {
    setFile(event.target.files[0]);
    setImageRef(ref(storage, `events/${file.lastModified.toString()}`));
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
        <input type="file" accept="image/*" name="file-loader" id="file-loader" onChange={handleFileUpdate} />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Post
        </Button>
      </Form>
      <ul className="events" />
    </div>
  );
}

export default Main;
