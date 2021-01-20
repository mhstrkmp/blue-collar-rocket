import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const userString = localStorage.getItem("__bcrUser__");
    const user = async () => (await JSON.parse(userString)) || {};
    setData(user);
  }, []);

  useEffect(() => {
    localStorage.setItem("__bcrUser__", JSON.stringify(data) || {});
  }, [data]);

  // Functions for login, logout and register will be inserted below
  const login = async (username, password) => {
    try {
      const { data } = await axios.get(`/api/auth/${username}/${password}`);
      setData({ token: data });
      return;
    } catch (error) {
      setError(true);
    }
  };

  return <AuthContext.Provider value={{ data, login, error }} {...props} />;
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
