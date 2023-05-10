/* eslint-disable react/prop-types */
import React, { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const monitorAuthState = async () => {
    try {
      onAuthStateChanged(auth, (user) => setCurrentUser(user));
    } catch (error) {
      console(error);
    }
  };

  useEffect(() => {
    monitorAuthState();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}
