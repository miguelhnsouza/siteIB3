import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const investimentos = [
    {
        id: 1,
        titulo: "Desenvolvimento imobiliário",
        descricao: "Projetos voltados à construção ou urbanização.",
        icon: "fas fa-building"
    },
    {
        id: 2,
        titulo: "Loteamentos",
        descricao: "Investimentos atrelados à venda parcelada de lotes.",
        icon: "fas fa-map-marked-alt"
    },
    {
        id: 3,
        titulo: "Imóveis específicos",
        descricao: "Projetos com foco em renda ou valorização.",
        icon: "fas fa-home"
    },
    {
        id: 4,
        titulo: "Acesso facilitado",
        descricao: "Invista no mercado imobiliário sem precisar comprar um imóvel inteiro.",
        icon: "fas fa-door-open"
    },
    {
        id: 5,
        titulo: "Oportunidades selecionadas",
        descricao: "Cada projeto passa por análise antes de ser disponibilizado na plataforma.",
        icon: "fas fa-search-dollar"
    },
    {
        id: 6,
        titulo: "Transparência total",
        descricao: "Informações claras sobre prazos, riscos e retorno estimado.",
        icon: "fas fa-shield-alt"
    }
];

export default function Investidores() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(investimentos.length / cardsPerPage);

    const titulos = [
        "TIPOS DE INVESTIMENTOS DISPONÍVEIS",
        "POR QUE INVESTIR COM A IB3 CAPITAL?"
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleCards = investimentos.slice(
        currentIndex * cardsPerPage,
        (currentIndex + 1) * cardsPerPage
    );

    return (
        <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container py-4">
                
                {/* Header: Títulos e Descrição */}
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <p className="text-uppercase fw-light small mb-3" style={{ letterSpacing: '2px' }}>Investidores</p>
                        <h2 className="display-4 mb-3" style={{ fontFamily: 'Axiforma, serif', color: '#000' }}>
                            Oportunidades reais, <br />com potencial de retorno
                        </h2>
                        <p className="text-muted lh-lg">
                            Os investimentos imobiliários disponibilizados na ib3 Capital envolvem empreendimentos 
                            como loteamentos, imóveis e projetos de desenvolvimento, estruturados para captação coletiva.
                        </p>
                    </div>
                </div>

                <h5 className="fw-bold mb-4">{titulos[currentIndex]}</h5>

                <div className="row g-4">
                    {visibleCards.map((item) => (
                        <div key={item.id} className="col-md-4">
                            <div className="h-100 p-5 bg-white rounded-4 shadow-sm custom-hover-card">
                                <div className="fs-1 mb-4 text-dark">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="h4 fw-normal mb-3" style={{ fontSize: '1.75rem' }}>{item.titulo}</h3>
                                <p className="text-muted mb-4">{item.descricao}</p>
                                <a href="#" className="text-dark text-decoration-none fw-bold small">
                                    saiba mais <span className="ms-1">↘</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer: Navegação e Botão Cadastre-se */}
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="d-flex gap-2">
                        <button 
                            onClick={handlePrev} 
                            className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center text-white" 
                            style={{ width: '45px', height: '45px', backgroundColor: '#0b0b0b' }}
                            aria-label="Anterior"
                        >
                            ←
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="btn rounded-circle d-flex align-items-center justify-content-center text-white" 
                            style={{ width: '45px', height: '45px', backgroundColor: '#0b0b0b' }}
                            aria-label="Próximo"
                        >
                            →
                        </button>
                    </div>
                    <button className="btn rounded-pill px-5 py-2 fw-bold shadow-sm" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
                        Cadastre-se
                    </button>
                </div>
            </div>

            {/* Apenas o CSS essencial que o Bootstrap não cobre */}
            <style>{`
                .custom-hover-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
                    border: 2px solid transparent !important;
                }
                .custom-hover-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                    border: 1px solid #167ea5 !important;
                }
            `}</style>
        </section>
    );
}