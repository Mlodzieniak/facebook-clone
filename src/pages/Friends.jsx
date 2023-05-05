import { Button } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import "../styles/friends.css";

function Friends() {
  const friends = [{ name: "Jogn", uid: "XD" }, { name: "HEHE", uid: "XDD" }];
  //   friends.length = 0;
  return (
    <div className="friends">
      <ul className="friends-list">
        {friends.length ? friends.map((friend) => (
          <Button key={friend.uid} className="friend" variant="outlined">
            {friend.name}
          </Button>
        )) : <Button className="friend" disabled>No friends found</Button>}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Friends;
