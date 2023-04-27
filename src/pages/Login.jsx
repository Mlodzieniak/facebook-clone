import React, { useState } from "react";
import { Button } from "@mui/material";
import "../styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event, cb) => {
    cb(event.target.value);
  };
  // const submit = () => {
  //   signInWithEmailAndPassword(auth, email, password);
  // };

  const signIn = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredentials;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
    }
  };
  return (
    <div className="login-page">
      <div className="logo-wrapper">
        <div className="logo">Greenbook</div>
        <div className="motto">Connect with friends and world around you on Greenbook.</div>
      </div>
      <div className="login-wrapper">
        <input type="text" placeholder="Email" onChange={(event) => onChange(event, setEmail)} />
        <input type="password" placeholder="Password" onChange={(event) => onChange(event, setPassword)} />
        <Button variant="contained" onClick={signIn}>Log In</Button>

        <span className="divider" />
        <Button variant="contained" color="secondary">Sign in with Google</Button>

      </div>

    </div>
  );
}

export default Login;
