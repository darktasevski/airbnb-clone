import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ApolloProvider } from "react-apollo";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import apolloClient from "./apollo";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
