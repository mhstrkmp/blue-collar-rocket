import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CategoriesPage } from "./pages/CategoriesPage/CategoriesPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { CustomersOverviewPage } from "./pages/CustomersOverviewPage/CustomersOverviewPage";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage/OrderConfirmationPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { ProductsOverviewPage } from "./pages/ProductsOverviewPage/ProductsOverviewPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useAuth } from "./context/AuthContext";

const queryClient = new QueryClient();

function AuthenticatedApp() {
  const data = useAuth();
  console.log(data);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/loading">
              <LoadingPage />
            </Route>
            <Route exact path="/">
              <CategoriesPage title={"Home"} />
            </Route>
            <Route path="/category/:id">
              <ProductsOverviewPage title={"Kategorie"} />
            </Route>
            <Route path="/items">
              <ProductsOverviewPage title={"Angebotsübersicht"} />
            </Route>
            <Route path="/item/:id">
              <ProductPage title={"Angebot"} />
            </Route>
            <Route path="/customers">
              <CustomersOverviewPage title={"Kunden"} />
            </Route>
            <Route path="/checkout">
              <CheckoutPage title={"Warenkorb"} />
            </Route>
            <Route path="/order-confirmation">
              <OrderConfirmationPage />
            </Route>
            <Route path="/profile">
              <ProfilePage title={"Profil"} />
            </Route>
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default AuthenticatedApp;
