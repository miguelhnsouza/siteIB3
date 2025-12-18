import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroHome.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="hero-home" id="home">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 text-center text-lg-start">
                        
                        <h1 className="hero-title text-start">
                            Revolucione o seu <br /> 
                            modo de investir
                        </h1>
                        <p className="hero-lead fs-3">
                            Rentabilidade de <strong>20%</strong> ao ano!
                        </p>
                        <Link to="/investidores" className="btn btn-light rounded-pill px-4 py-2 mt-3">
                            Ver Investimentos
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}