import React, { useContext, useEffect, useState } from "react";
// import "../styles/profile.css";
import "../styles/userprofile.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import Event from "../components/Event";
import { AuthContext } from "../Auth";
import { db } from "../firebase";

function Profile() {
  const { displayName, photoURL } = useContext(AuthContext);
  const currentUser = useContext(AuthContext);

  const [userData, setUserData] = useState({});
  const [creationDate, setCreationDate] = useState("");
  const { uid, metadata } = currentUser;
  const { tweeter, aboutMe, friends } = userData;

  async function loadUserData() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await setUserData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  useEffect(() => {
    loadUserData();
    // console.log(currentUser);
    // const joinDate = new Timestamp(Math.floor(metadata.createdAt / 10000), 0);
    // const joinDate = metadata.createdAt.toDate().toDateString();
    // const date = new Date(metadata.createdAt * 1000);
    // const day = date.getDate().toString().padStart(2, "0");
    // const month = (date.getMonth() + 1).toString().padStart(2, "0");
    // const year = date.getFullYear().toString();
    // setCreationDate(`${day}/${month}/${year}`);
    // console.log(joinDate.toDate());
    setCreationDate(metadata.createdAt);

    // console.log(joinDate);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="user-profile-page">
      <div className="content">
        <div className="user-data">
          <div className="data-wrapper">
            <div className="name">{displayName}</div>
          </div>
          <img
            className="profile-picture"
            src={photoURL}
            alt=""
          />
          <div className="data-wrapper">
            <div className="label">
              <p className="user-display-name">Name:</p>
              <div className="user-display-name">{displayName}</div>
            </div>
            <div className="label">
              <p className="tweeter">Tweeter:</p>
              <div className="tweeter">{tweeter}</div>
            </div>
            <div className="label">
              <p className="user-friends">
                Friends:
                {/* {friends || 0} */}
              </p>
              <div>{friends || 0}</div>
            </div>
            <div className="label">
              <p className="creation-date">Join date:</p>
              <div className="creation-date">{creationDate}</div>
            </div>
            <div className="label">
              <p className="about-me">About me:</p>
              <div className="about-me">{aboutMe}</div>
            </div>
            {currentUser ? (<Button variant="outlined" onClick={() => navigate("/myprofile/edit")}>Edit</Button>
            ) : null}
          </div>
        </div>
        <div className="activity">
          <Event />
        </div>
      </div>

    </div>
  );
}

export default Profile;
