import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
