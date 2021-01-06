import React from "react";
import PropTypes from "prop-types";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AppProviders;
