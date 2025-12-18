import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNavbar.css";
import { trackCustomEvent } from "../../utils/metaPixel";

import logoIb3 from "@/assets/logo_ib3_branca.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            height="35"
            className="me-2 transition-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#investidores">
                Seja Investidor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#simulador">
                Simulação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#oportunidades">
                Oportunidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contato
              </a>
            </li>
          </ul>

          <button className="btn btn-outline-light border-0 rounded-pill" style={{fontWeight: 100}} onClick={() => { trackCustomEvent('Acessar'); window.open('https://token.ib3capital.app.br/', '_blank'); }}>
            <i className="bi bi-box-arrow-in-right me-1"></i> Acessar
          </button>
          <button className="btn btn-outline-light border-0 rounded-pill" style={{fontWeight: 100}} onClick={() => { trackCustomEvent('Create_Account'); navigate('/download-app'); }}>
            <i className="bi bi-person-plus me-1"></i> Criar minha conta
          </button>
        </div>
      </nav>
    </header>
  );
}
