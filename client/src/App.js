import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { CategoriesPage } from "./pages/CategoriesPage/CategoriesPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { CustomersOverviewPage } from "./pages/CustomersOverviewPage/CustomersOverviewPage";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage/OrderConfirmationPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { ProductsOverviewPage } from "./pages/ProductsOverviewPage/ProductsOverviewPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
        <Route path="/loading">
          <LoadingPage />
        </Route>
        <Route path="/product-overview">
          <ProductsOverviewPage />
        </Route>
        <Route path="/product-detail">
          <ProductPage />
        </Route>
        <Route path="/customer-overview">
          <CustomersOverviewPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/order-confirmation">
          <OrderConfirmationPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
