import React from "react";
import "./styles/app.css";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, storage, db } from "../firebase";
// import Login from "./pages/Login";
// import Main from "./.pages/Main";
import UserProfile from "./pages/UserProfile";

function App() {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserProfile />
        {/* <Login /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
