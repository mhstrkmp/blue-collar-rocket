import React, { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  // Function to fetch and check user data will be inserted below
  const data = {
    user: "TestUser",
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  // Functions for login, logout and register will be inserted below

  return <AuthContext.Provider value={{ data }} {...props} />;
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
