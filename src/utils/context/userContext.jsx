import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]); // daftar user yang register

  const register = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <AuthContext.Provider value={{ users, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthenti() {
  return useContext(AuthContext);
}
