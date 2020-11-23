import React from "react";
import Page from "./pages/Page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Page
        onLogin={() => console.log("login")}
        onLogout={() => console.log("logout")}
        onCreateAccount={() => console.log("create account")}
      />
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
    </div>
  );
}

export default App;
