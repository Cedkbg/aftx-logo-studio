import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- assure-toi que react-router-dom est installé
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/aftx-logo-studio/"> {/* <-- important pour GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
