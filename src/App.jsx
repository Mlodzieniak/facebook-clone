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
// import UserProfile from "./pages/UserProfile";

function App() {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" Component={Main} />

              <Route path="/login" Component={Login} />
              <Route path="/signup" Component={Signup} />
              <Route
                path="/user"
                element={(
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
)}
              />
            </Routes>
            {/* <Route path="/user/uid" Component={UserProfile} /> */}
            {/* <UserProfile /> */}
            {/* <Login /> */}
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
