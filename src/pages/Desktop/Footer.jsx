import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logoIb3 from "@/assets/logo_ib3_branca.png";
import { trackCustomEvent } from "../../utils/metaPixel";

import { Link, redirect } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-light px-3 py-5 d-flex align-items-center"
    style={{backgroundColor: "#000000ff", height: "auto"}}
    id="footer">
      <div className="container w-100 h-auto">
        <div className="row gy-4 mb-1 d-flex justify-content-between h-100">

          <div className="col-md-4 mt-1 d-flex flex-column">
            <div className="mb-4 d-flex align-items-center gap-2">
              <img
                src={logoIb3}
                alt="LoteMobile"
                style={{ height: "40px" }}
              />
            </div>
            <p className="w-75 mb-5 fs-6" style={{ lineHeight: "1.4" }}>
              Oferecemos as melhores taxas do mercado imobiliário através de uma plataforma robusta e transparente. Transforme seus investimentos com a carteira que mais fornece vantagens e governança para o seu dinheiro.
            </p>

            <div className="d-flex gap-3 mt-3 fs-4">
              <a href="https://www.instagram.com/ib3capital/" className="text-light" target="blank" onClick={() => trackCustomEvent('Social_Media_Click', { platform: 'Instagram' })}><i className="bi bi-instagram"></i></a>
              {/* <a href="https://www.linkedin.com/company/ib3capital/" className="text-light" target="blank"><i className="bi bi-linkedin"></i></a> */}
              {/* <a href="https://www.youtube.com/@ib3capital" className="text-light" target="blank"><i className="bi bi-youtube"></i></a> */}
              <a href="https://www.facebook.com/ib3capital" className="text-light" target="blank" onClick={() => trackCustomEvent('Social_Media_Click', { platform: 'Facebook' })}><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          <div className="col-md-2 w-auto">
            <h6 className="fw-bold fs-3 mb-3">Links Úteis</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
              <li><a href="#header" className="text-light text-decoration-none">Início</a></li>
              <li><a href="#videos" className="text-light text-decoration-none">Seja Investidor</a></li>
              <li><a href="#integrations" className="text-light text-decoration-none">Simulação</a></li>
              <li><a href="#questions" className="text-light text-decoration-none">Oportunidades</a></li>
              <li><a href="#comments" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>
{/* 
          <div className="col-md-2 w-auto">
            <h6 className="fw-bold mb-3 fs-3">Serviços</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
              <li>Mapa Interativo</li>
              <li>Google Maps</li>
              <li>CRM Integrado</li>
              <li>Simulador de Vendas</li>
              <li>Automação de Cobranças</li>
              <li>Inteligência Artificial</li>
              <li>Aplicativo Lote Mobile</li>
            </ul>
          </div> */}

          <div className="col-md-3 w-auto">
            <h6 className="fw-bold mb-3 fs-3">Contatos</h6>
            <ul className="list-unstyled fs-6 mt-5 gap-3 d-flex flex-column">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Av. Paulo VI, 781<br />Jardim Lima<br />Franca - SP
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                suporte@ib3capital.com.br
              </li>
              <li>
                <i className="bi bi-clock me-2"></i>
                Seg a Qui: 8h às 18h<br />
                Sex: 8h às 12h
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4 mb-4" />
        <div className="d-flex flex-column mt-2 flex-md-row justify-content-between small">
          <p className="mb-0">
            © Copyright 2025 – IB System
          </p>
          <div className="d-flex gap-3">
            <Link to="/privacidade" className="text-light text-decoration-none">Políticas de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
