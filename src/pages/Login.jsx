import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button, Alert } from "@mui/material";
import "../styles/login.css";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const currentUser = useContext(AuthContext);

  const onChange = (event, cb) => {
    cb(event.target.value);
  };
  const handleError = (error) => {
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
      setLoginError("Wrong password. Try again.");
    } else {
      setLoginError(`${error.message}`);
    }
  };

  const signIn = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredentials;
      setLoginError(null);
      console.log(user);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    currentUser ? (<Navigate to="/" />) : (
      <div className="login-page">
        <div className="logo-wrapper">
          <div className="logo">Greenbook</div>
          <div className="motto">Connect with friends and world around you on Greenbook.</div>
        </div>
        <div className="interface">
          <div className="login-wrapper">
            <input type="text" placeholder="Email" onChange={(event) => onChange(event, setEmail)} />
            <input type="password" placeholder="Password" onChange={(event) => onChange(event, setPassword)} />
            <Button variant="contained" onClick={signIn}>Log In</Button>
            <span className="divider" />
            <Button variant="contained" color="secondary">Sign in with Google</Button>
          </div>
          <div className="error-wrapper">
            <div className="error">
              {loginError ? (<Alert severity="error">{loginError}</Alert>) : null}
            </div>
          </div>
        </div>

      </div>
    )
  );
}

export default Login;
