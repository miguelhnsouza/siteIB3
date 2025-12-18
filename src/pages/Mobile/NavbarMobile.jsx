import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNavbarMobile.css";
import { trackCustomEvent } from "../../utils/metaPixel";
import imgIb3 from "../../assets/logo_ib3_branca.png";

export default function NavbarMobile() {
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
    <header className={`navbar-header ${scrolled ? "scrolled" : ""} py-3 px-4`}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={imgIb3}
            alt="IB3 Capital"
            height="45"
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

        <div className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#investidores" onClick={() => setMenuOpen(false)}>
                Seja Investidor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#simulador" onClick={() => setMenuOpen(false)}>
                Simulação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#oportunidades" onClick={() => setMenuOpen(false)}>
                Oportunidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>

          {/* BOTÕES MOBILE */}
          <div className="d-lg-none mt-3 text-center">
            <button className="btn btn-primary px-4 py-1 rounded-pill me-2" onClick={() => { trackCustomEvent('Acessar'); window.open('https://token.ib3capital.app.br/', '_blank'); }}>
              <i className="bi bi-box-arrow-in-right me-1"></i> Acessar
            </button>
            <button className="btn btn-dark px-4 py-1 rounded-pill" onClick={() => { trackCustomEvent('Create_Account'); navigate('/download-app'); }}>
              <i className="bi bi-person-plus me-1"></i> Criar minha conta
            </button>
          </div>
        </div>

        {/* BOTÕES DESKTOP */}
        <div className="d-none d-lg-flex align-items-center ms-3 gap-2">
          <button className="btn btn-primary px-4 py-1 rounded-pill" onClick={() => { trackCustomEvent('Acessar'); window.open('https://token.ib3capital.app.br/', '_blank'); }}>
            <i className="bi bi-box-arrow-in-right me-1"></i> Acessar
          </button>
          <button className="btn btn-dark px-4 py-1 rounded-pill" onClick={() => { trackCustomEvent('Create_Account'); navigate('/download-app'); }}>
            <i className="bi bi-person-plus me-1"></i> Criar minha conta
          </button>
        </div>
      </nav>
    </header>
  );
}
