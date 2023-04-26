import React from "react";
import "../styles/navbar.css";
import {
  Box, Tabs, Tab, Avatar,
} from "@mui/material";

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo-search">
          <div className="nav-logo">
            <div className="nav-logo-letter">G</div>
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
              <Tab label="Home" />
              <Tab label="Friends" />
              <Tab label="Tab Three" />
            </Tabs>
          </Box>
        </div>
        <div className="my-profile">
          <Avatar src="https://live.staticflickr.com/5487/12135275084_60429daea6_b.jpg" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
