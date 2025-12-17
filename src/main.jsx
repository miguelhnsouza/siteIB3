import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Importar páginas
import DesktopHome from "@/pages/Desktop/Home";
import MobileHome from "@/pages/Mobile/Home";
import useIsDesktop from "./hooks/useIsDesktop";


function App() {
  const isDesktop = useIsDesktop();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isDesktop ? <DesktopHome /> : <MobileHome />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);