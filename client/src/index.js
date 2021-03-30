import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Helmet} from "react-helmet";


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
    <meta charSet="utf-8" />
      <title>Bravery imdb</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
