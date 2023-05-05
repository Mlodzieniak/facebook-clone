import React, { useContext } from "react";
import "../styles/navbar.css";
import {
  Box, Tabs, Tab, Avatar, Button,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../Auth";

function NavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { photoURL, displayName } = useContext(AuthContext);

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
