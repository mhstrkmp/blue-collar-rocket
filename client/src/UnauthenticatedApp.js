import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { useAuth } from "./context/AuthContext";
import styled from "styled-components/macro";
import { AppWrapper } from "./components/Wrapper";
import Button from "./components/Button";
import { ReactComponent as Logo } from "./assets/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2.5rem;
`;

const UnauthenticatedApp = () => {
  const { login } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Container>
          <Logo />
          <h2>Please Log In:</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username:</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              <p>Password:</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
          <div>
            <h3>Test Credentials:</h3>
            <p>Username: Meister GmbH</p>
            <p>Password: Passwort</p>
          </div>
        </Container>
      </AppWrapper>
    </>
  );
};

export default UnauthenticatedApp;
