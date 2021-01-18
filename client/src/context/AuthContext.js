import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("__bcrUser__");
    const user = JSON.parse(userString) || {};
    setData(user);
  }, []);

  useEffect(() => {
    localStorage.setItem("__bcrUser__", JSON.stringify(data) || {});
  }, [data]);

  // Functions for login, logout and register will be inserted below
  const login = async (username, password) => {
    try {
      setError(false);
      const { data } = await axios.get(`/api/auth/${username}/${password}`);
      setData({ token: data });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return <AuthContext.Provider value={{ data, error, login }} {...props} />;
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
