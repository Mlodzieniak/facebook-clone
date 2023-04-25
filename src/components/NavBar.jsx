import React from "react";
import "../styles/navbar.css";
import { Box, Tabs, Tab } from "@mui/material";

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <div className="logo-search">
        <div className="nav-logo"><div className="nav-logo-letter">G</div></div>
        <div className="search-container"><input className="search-input" type="search" /></div>
      </div>
      <div className="routes">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Home" />
            <Tab label="Friends" />
            <Tab label="Tab Three" />
          </Tabs>
        </Box>
      </div>
      <div className="my-profile">My Profile</div>

    </div>
  );
}

export default NavBar;
