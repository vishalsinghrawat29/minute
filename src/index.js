import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProivider, AuthContext } from "./Contexts/AuthContext";

export { AuthContext };

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProivider>
        <App />
      </AuthProivider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
