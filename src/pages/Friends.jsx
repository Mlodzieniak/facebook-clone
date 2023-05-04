import React from "react";
import { Outlet } from "react-router";

function Friends() {
  return (
    <div className="friends">
      <div className="friends-list">HAHAHAH</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Friends;
