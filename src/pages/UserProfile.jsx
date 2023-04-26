import React from "react";
import "../styles/userprofile.css";
import NavBar from "../components/NavBar";
import Event from "../components/Event";

function UserProfile() {
  return (
    <div className="user-profile-page">
      <NavBar />
      <div className="content">
        <div className="user-data">
          <div className="data-wrapper">
            <div className="name">John Smith</div>
          </div>
          <img
            className="profile-picture"
            src="https://live.staticflickr.com/5487/12135275084_60429daea6_b.jpg"
            alt=""
          />
          <div className="data-wrapper">
            <div className="join-date">01.01.2015</div>
            <div className="age">22</div>
            <div className="friends">No friends</div>
          </div>
        </div>
        <div className="activity">
          <Event />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
