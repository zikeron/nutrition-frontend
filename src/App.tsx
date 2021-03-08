import React from "react";
import { Nutrition } from "../src/containers/Nutrition";
import { ApolloProvider } from "@apollo/client";
import { CustomClient } from "./lib/apollo-client";

function App() {
  return (
    <ApolloProvider client={CustomClient()}>
      <Nutrition />
    </ApolloProvider>
  );
}

export default App;
