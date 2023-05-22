import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProivider, AuthContext } from "./Contexts/AuthContext";
import { ProductProvider, ProductContext } from "./Contexts/ProductContext";

export { AuthContext, ProductContext };

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProivider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProivider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
