import React from "react";
import "./styles/app.css";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, storage, db } from "../firebase";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
// import Main from "./.pages/Main";

function App() {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
