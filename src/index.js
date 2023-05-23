import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProivider, AuthContext } from "./Contexts/AuthContext";
import { ProductProvider, ProductContext } from "./Contexts/ProductContext";

export { AuthContext, ProductContext };

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProivider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProivider>
    </Router>
  </React.StrictMode>
);
