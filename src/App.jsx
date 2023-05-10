import React from "react";
import "./styles/app.css";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Friends from "./pages/Friends";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute component={<NavBar />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Main />,
            }, {
              path: "/myprofile",
              element: <Profile />,
            }, {
              path: "/myprofile/edit",
              element: <EditProfile />,
            }, {
              path: "/friends",
              element: <Friends />,
              children: [
                {
                  path: "/friends/:uid",
                  element: <UserProfile />,
                },
              ],
            },
          ],
        },
      ],
    }, {
      path: "/login",
      element: <Login />,
    }, {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
