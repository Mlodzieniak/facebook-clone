import React, { useContext, useState, useEffect } from "react";
import "../styles/navbar.css";
import {
  Box, Tabs, Tab, Avatar, Button,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import { AuthContext } from "../Auth";

function NavBar() {
  const [value, setValue] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { uid } = useContext(AuthContext);

  const userRef = doc(db, `users/${uid}`);
  onSnapshot(userRef, {
    next: ((snap) => {
      const userData = snap.data();
      setDisplayName(userData.displayName);
      setPhotoUrl(userData.photoURL);
      console.log("hello from snapshot");
    }),
    error: ((error) => {
      console.log(`error from snapshot: ${error}`);
    }),
  });

  const getUserData = async () => {
    await getDoc(doc(db, `users/${uid}`));
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="logo-search">
            <div className="nav-logo">
              <h1 className="nav-logo-letter">G</h1>
            </div>
            <div className="search-container">
              <input className="search-input" type="search" />
            </div>
          </div>
          <div className="routes">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Home" onClick={() => navigate("/")} />
                <Tab label="Friends" onClick={() => navigate("/friends")} />
                <Tab label="My Profile" onClick={() => navigate("/myprofile")} />
              </Tabs>
            </Box>
          </div>
          <div className="my-profile">
            <p className="display-name">{displayName}</p>
            <Avatar src={photoURL} />
            <Button onClick={() => auth.signOut()}>Sign out</Button>
          </div>
        </div>
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
