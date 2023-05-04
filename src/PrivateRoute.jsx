/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

function PrivateRoute({ component }) {
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    currentUser ? component : (<Navigate to="/login" replace />)
  );
}

export default PrivateRoute;
