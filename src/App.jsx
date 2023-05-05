import React from "react";
import "./styles/app.css";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import MyProfile, { action as editAction } from "./pages/MyProfile";
import Friends from "./pages/Friends";
// import EditUserProfile from "./pages/EditUserProfile";
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
              element: <MyProfile />,
              action: editAction,
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

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <AuthProvider>
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route
//                 path="/"
//                 element={(
//                   <PrivateRoute>
//                     <Main />
//                   </PrivateRoute>
// )}
//               />
//               <Route path="/login" Component={Login} />
//               <Route path="/signup" Component={Signup} />
//               <Route
//                 path="/myaccount"
//                 element={(
//                   <PrivateRoute>
//                     <UserProfile />
//                   </PrivateRoute>
// )}
//               />
//               <Route
//                 path="/edit-profile"
//                 element={(
//                   <PrivateRoute>
//                     <EditUserProfile />
//                   </PrivateRoute>
// )}
//               />
//             </Routes>
//           </div>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

export default App;
