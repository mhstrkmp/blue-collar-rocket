import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "./components/Wrapper";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { CustomersOverviewPage } from "./pages/CustomersOverviewPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsOverviewPage } from "./pages/ProductsOverviewPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function AuthenticatedApp() {
  const [title, setTitle] = useState("Kategorie");

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppWrapper>
          <Router>
            <Switch>
              <Route exact path="/">
                <CategoriesPage title={"Home"} setTitle={setTitle} />
              </Route>
              <Route path="/category/:id">
                <ProductsOverviewPage title={title} />
              </Route>
              <Route path="/items">
                <ProductsOverviewPage title={"Suche"} />
              </Route>
              <Route path="/item/:id">
                <ProductPage title={"Details"} />
              </Route>
              <Route path="/customers">
                <CustomersOverviewPage title={"Kunden"} />
              </Route>
              <Route path="/checkout">
                <CheckoutPage title={"Warenkorb"} />
              </Route>
              <Route path="/profile">
                <ProfilePage title={"Profil"} />
              </Route>
            </Switch>
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </AppWrapper>
      </QueryClientProvider>
    </>
  );
}

export default AuthenticatedApp;
