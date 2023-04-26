import React from "react";
import { Avatar } from "@mui/material";

function Comment() {
  return (
    <div className="comment">
      <Avatar>D</Avatar>
      <div className="comment-data">
        <div className="author">Author</div>
        <p className="text">
          Lorem ipsCommentum, dolor sit amet consectetur adipisicing elit.
          Voluptates quos
        </p>
      </div>
    </div>
  );
}

export default Comment;
