import React, { useState, useEffect, useContext } from "react";
import { Button, Alert, Divider } from "@mui/material";
import "../styles/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { auth } from "../firebase";
import { AuthContext } from "../Auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [viableEmail, setViableEmail] = useState(false);
  const [viablePassword, setViablePassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (event, cb) => {
    cb(event.target.value);
  };
  const submit = () => {
    if (viableEmail && viablePassword) {
      createUserWithEmailAndPassword(auth, email, password);
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
    currentUser ? (<Navigate to="/" />) : (
      <div className="login-page">
        <div className="logo-wrapper">
          <div className="logo">Greenbook</div>
          <div className="motto">Connect with friends and world around you on Greenbook.</div>
        </div>
        <div className="interface">
          <div className="login-wrapper">
            <div>Create new account</div>
            <input value={email} onChange={(event) => onChange(event, setEmail)} type="text" placeholder="Email" />
            <input value={password} onChange={(event) => onChange(event, setPassword)} type="password" placeholder="Password" />
            <Button variant="contained" onClick={submit}>Submit</Button>
            <Divider>Or</Divider>
            <Button variant="outlined" onClick={() => navigate("/login")}>Login with existing account</Button>
          </div>
          <div className="error-wrapper">
            <div className="error">
              {emailError ? (<Alert severity="error">E-mail is not valid.</Alert>) : null}
              {passwordError ? (<Alert severity="error">Password must be between 6 and 20 characters long.</Alert>) : null}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Signup;
