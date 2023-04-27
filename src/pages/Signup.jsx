import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../styles/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [viableEmail, setViableEmail] = useState(false);
  const [viablePassword, setViablePassword] = useState(false);

  const onChange = (event, cb) => {
    cb(event.target.value);
  };
  const submit = () => {
    if()
    createUserWithEmailAndPassword(auth, email, password);
    console.log("done");
  };
  useEffect(() => {
    const emailRegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (emailRegExp.test(email)) {
      setViableEmail(true);
    } else {
      setViableEmail(false);
    }
  }, [email]);
  useEffect(() => {
    if (password.length >= 6 && password.length <= 20) {
      setViablePassword(true);
    } else {
      setViablePassword(false);
    }
  }, [password]);

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
        <Button variant="contained" onClick={register}>Register</Button>

      </div>

    </div>
  );
}

export default Signup;
