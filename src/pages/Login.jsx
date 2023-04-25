import React from "react";
import { Button } from "@mui/material";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="logo-wrapper">
        <div className="logo">Greenbook</div>
        <div className="motto">Connect with friends and world around you on Greenbook.</div>
      </div>
      <div className="login-wrapper">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <button type="button" className="login-password-btn">Log In</button> */}
        <Button variant="contained">Log In</Button>

        <span />
        {/* <button type="button" className="login-google-btn">Sign in with Google</button> */}
        <Button variant="contained" color="secondary">Sign in with Google</Button>

      </div>

    </div>
  );
}

export default Login;
