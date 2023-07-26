import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// provider to wrap around the app
import { ProductsProvider } from "./contexts/products_context.jsx";
import { FilterProvider } from "./contexts/filter_context.jsx";
import { CartProvider } from "./contexts/cart_context.jsx";
import { UserProvider } from "./contexts/user_context.jsx";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="akw.uk.auth0.com"
      clientId="wtHKzsdOiKBYt7uLPAK2PsURpN3aejOl"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
