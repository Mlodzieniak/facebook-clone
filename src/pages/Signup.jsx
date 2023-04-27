import React, { useState, useEffect } from "react";
import { Button, Alert } from "@mui/material";
import "../styles/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [viableEmail, setViableEmail] = useState(false);
  const [viablePassword, setViablePassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChange = (event, cb) => {
    cb(event.target.value);
  };
  const submit = () => {
    if (viableEmail && viablePassword) {
      createUserWithEmailAndPassword(auth, email, password);
      console.log("done");
    }
  };
  useEffect(() => {
    const emailRegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    setViableEmail(emailRegExp.test(email));
    setEmailError(!viableEmail && email.length > 2);
  }, [email]);
  useEffect(() => {
    setViablePassword(password.length >= 6 && password.length <= 20);
    setPasswordError(!viablePassword && password.length > 2);
  }, [password]);

  return (
    <div className="login-page">
      <div className="logo-wrapper">
        <div className="logo">Greenbook</div>
        <div className="motto">Connect with friends and world around you on Greenbook.</div>
      </div>
      <div className="signup-interface">
        <div className="login-wrapper">
          <div>Create new account</div>
          <input value={email} onChange={(event) => onChange(event, setEmail)} type="text" placeholder="Email" />
          <input value={password} onChange={(event) => onChange(event, setPassword)} type="password" placeholder="Password" />
          <Button variant="contained" onClick={submit}>Submit</Button>
        </div>
        <div className="error-wrapper">
          <div className="error">
            {emailError ? (<Alert severity="error">E-mail is not valid.</Alert>) : null}
            {passwordError ? (<Alert severity="error">Password must be between 6 and 20 characters long.</Alert>) : null}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Signup;
