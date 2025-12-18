import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Site from "./pages/Desktop/Site";
// import Investidores from "./pages/Desktop/Investidores";


function App() {
  // const isDesktop = useIsDesktop();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);