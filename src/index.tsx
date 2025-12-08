import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const domain = "dev-6sbwykqwe53eygkb.us.auth0.com";
const clientId = "ZAtDGtbksdJz37IDOkIBHkXDO5OtJbfW";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `https://${domain}/api/v2/`,
        scope: "openid profile email read:current_user update:current_user_metadata",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
