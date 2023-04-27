/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    // <Route
    //   {...rest}
    //   render={(routeProps) => (currentUser ? (<RouteComponent {...routeProps} />) : (<Navigate to="/login" replace />))}
    // //   element={currentUser ? (<RouteComponent />) : (<Navigate to="/login" />)}
    // />
    currentUser ? children : (<Navigate to="/login" />)
  );
}

export default PrivateRoute;
