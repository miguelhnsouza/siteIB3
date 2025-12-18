import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNavbar.css";

import logoIb3 from "@/assets/logo_ib3_branca.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar-header ${scrolled ? "scrolled" : ""} py-3`}
      id="header"
    >
      <nav className="navbar navbar-expand-lg navbar-light container">
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logoIb3}
            alt="Hrt Incorporadora"
            height="45"
            className="me-2 transition-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#investidor">
                Seja Investidor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#parceria">
                Simulação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contato
              </a>
            </li>
          </ul>

          <form className="d-flex align-items-center" role="search">
            <label htmlFor="site-search" className="visually-hidden">
              Buscar
            </label>
            <div className="search-wrapper">
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
              <input
                id="site-search"
                className="search-input"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </div>
          </form>

          <button className="btn btn-link ms-3 p-0" aria-label="Perfil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M13.468 12.37C12.758 11.226 11.6 10.5 10 10.5H6c-1.6 0-2.758.726-3.468 1.87A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
