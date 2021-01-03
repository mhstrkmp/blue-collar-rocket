import React from "react";
import GlobalStyle from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function UnauthenticatedApp() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        {/* This will be the login page */}
        <div>Please login first...</div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default UnauthenticatedApp;
