import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroHome.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="hero-home" id="home">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 text-center text-lg-start" style={{marginTop: "10%"}}>
                        
                        <h1 className="hero-title text-start">
                            Revolucione o seu <br /> 
                            modo de investir
                        </h1>
                        <p className="hero-lead fs-5">
                            Invista com a IB3 Capital em imóveis reais: lotes, empreendimentos e projetos imobiliários selecionados, com <strong>rentabilidade de até 25% ao ano.</strong> Seu investimento conectado a ativos reais do mercado imobiliário.
                        </p>
                        <a href="#oportunidades" className="text-decoration-none text-white d-inline-flex align-items-center mt-3">
                            <i className="bi bi-arrow-right me-2"></i> Veja as oportunidades
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}