import React from "react";
import "../styles/event.css";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comment from "./Comment";

function Event() {
  return (
    <div className="event">
      <div className="data-wrapper">
        <div className="author">John Smith announced:</div>
        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti est, molestiae deleniti iure tempora et esse, perferendis doloribus minus aperiam? Dolores alias earum rem temporibus, ipsam sed natus totam!</p>
      </div>
      <img className="event-image" src="https://energylandia.pl/wp-content/uploads/2017/04/co-to-jest-event-firmowy-scaled.jpg" alt="" />
      <Button><ThumbUpIcon /></Button>
      <textarea />
      <span className="divider" />

      <div className="data-wrapper">
        <Comment />
      </div>
    </div>
  );
}

export default Event;
