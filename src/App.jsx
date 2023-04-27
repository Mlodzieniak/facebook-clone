import React from "react";
import "./styles/app.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./themes/theme";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={(
                  <PrivateRoute>
                    <Main />
                  </PrivateRoute>
)}
              />
              <Route path="/login" Component={Login} />
              <Route path="/signup" Component={Signup} />
              <Route
                path="/myaccount"
                element={(
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
)}
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
