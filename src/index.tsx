import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContext, AuthProvider } from "./components/Authorization";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
