import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const UserContext = createContext();
const UserProvider = (props) => (
  <UserContext.Provider value={useAuth().data.user} {...props} />
);

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
