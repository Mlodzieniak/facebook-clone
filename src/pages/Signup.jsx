import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../styles/login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event, cb) => {
    cb(event.target.value);
  };

  return (
    <div className="login-page">
      <div className="logo-wrapper">
        <div className="logo">Greenbook</div>
        <div className="motto">Connect with friends and world around you on Greenbook.</div>
      </div>
      <div className="login-wrapper">
        <div>Create new account</div>
        <input value={email} onChange={(event) => onChange(event, setEmail)} type="text" placeholder="Email" />
        <input value={password} onChange={(event) => onChange(event, setPassword)} type="password" placeholder="Password" />
        <Button variant="contained">Register</Button>

      </div>

    </div>
  );
}

export default Signup;
