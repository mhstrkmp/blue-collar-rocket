import React from "react";
import AppProviders from "./context/AppProviders";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useUser } from "./context/UserContext";

export const AuthApp = () => {
  const user = useUser();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

function App() {
  return (
    <AppProviders>
      <AuthApp />
    </AppProviders>
  );
}

export default App;
