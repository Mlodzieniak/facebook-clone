/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}
