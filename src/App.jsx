import React from "react";
import "./styles/app.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, storage, db } from "../firebase";
import Login from "./pages/Login";

function App() {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
