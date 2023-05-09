import React, { useState, useContext, useEffect } from "react";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection, doc, getDocs, setDoc, Timestamp,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { storage, db } from "../firebase";
import { AuthContext } from "../Auth";
import Event from "../components/Event";

function Main() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [events, setEvents] = useState([]);

  const currentUser = useContext(AuthContext);
  const { uid } = currentUser;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (text.length > 5) {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      const eventData = {
        creationDate: Timestamp.fromDate(new Date()),
        text,
        authorId: uid,
        comments: [],
        imageURL: url,
      };
      setDoc(doc(db, "events", uuidv4()), eventData);
    }
    console.log(events);
  };

  useEffect(() => {
    if (file) {
      setImageRef(ref(storage, `events/${file.name}`));
    }
  }, [file]);
  useEffect(() => {
    const queryEvents = async () => {
      const newEvents = [];
      const eventsSnap = await getDocs(collection(db, "events"));
      eventsSnap.forEach((e) => {
        newEvents.push(e.data());
      });
      newEvents.sort((a, b) => b.creationDate.toMillis() - a.creationDate.toMillis());
      setEvents(newEvents);
    };
    queryEvents();
  }, []);
  return (
    <div className="main-page">
      <Form method="post" className="create-event">
        <TextField
          value={text}
          onChange={handleTextChange}
          aria-label="comment"
          placeholder="Write a comment..."
        />
        <input type="file" accept="image/*" name="file-loader" id="file-loader" onChange={(event) => { setFile(event.target.files[0]); }} />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Post
        </Button>
      </Form>
      <ul className="events">
        {events ? events.map((event) => <Event key={uuidv4()} eventData={event} />) : null}
      </ul>
    </div>
  );
}

export default Main;
