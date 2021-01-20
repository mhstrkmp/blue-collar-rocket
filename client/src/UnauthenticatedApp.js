import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { useAuth } from "./context/AuthContext";
import styled from "styled-components/macro";
import Button from "./components/Button";
import logo from "./assets/bcrLogo.png";

const Container = styled.div`
  background-image: url("/gplaypattern.png");
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  img {
    width: 66%;
    max-width: 350px;
    margin-bottom: 2em;
  }
`;

const LogInForm = styled.form`
  margin-top: 1.5em;
  input {
    padding: 0.3em;
    margin-bottom: 1em;
    color: var(--neutral-mid-N400);
    :focus {
      outline: none;
    }
  }
  button {
    margin-top: 1em;
  }
`;

const UnauthenticatedApp = () => {
  const { login, error } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="Logo" />
        {error && <h2>Benutzername oder Passwort unbekannt ...</h2>}
        <LogInForm onSubmit={handleSubmit}>
          <label>
            <p>Benutzername:</p>
            <input
              type="text"
              autoComplete="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            <p>Passwort:</p>
            <input
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </LogInForm>
        <div>
          <h3>Test-Account:</h3>
          <p>Benutzername: Meister GmbH</p>
          <p>Passwort: passwort</p>
        </div>
      </Container>
    </>
  );
};

export default UnauthenticatedApp;
