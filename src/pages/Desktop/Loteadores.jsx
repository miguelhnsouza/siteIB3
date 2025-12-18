import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const beneficios = [
    {
        id: 1,
        titulo: "Captação coletiva e acessível",
        descricao: "Divulgue seu empreendimento para diversos investidores ao mesmo tempo.",
        icon: "fas fa-users"
    },
    {
        id: 2,
        titulo: "Menos burocracia",
        descricao: "Processos digitais, claros e estruturados para facilitar a captação.",
        icon: "fas fa-file-signature"
    },
    {
        id: 3,
        titulo: "Maior visibilidade do projeto",
        descricao: "Seu empreendimento ganha alcance e exposição em uma plataforma focada em investimentos imobiliários.",
        icon: "fas fa-bullhorn"
    },
    {
        id: 4,
        titulo: "Transparência e confiança",
        descricao: "Informações claras para investidores fortalecem a credibilidade do projeto.",
        icon: "fas fa-handshake"
    },
    // {
    //     id: 5,
    //     titulo: "Gestão integrada",
    //     descricao: "Acompanhe todo o processo de captação em um painel único e intuitivo.",
    //     icon: "fas fa-chart-pie"
    // },
    // {
    //     id: 6,
    //     titulo: "Suporte especializado",
    //     descricao: "Conte com uma equipe dedicada para auxiliar em todas as etapas do projeto.",
    //     icon: "fas fa-headset"
    // },
    // {
    //     id: 7,
    //     titulo: "Pagamentos automatizados",
    //     descricao: "Sistema de gestão de recebíveis e emissão de boletos sem custo adicional.",
    //     icon: "fas fa-money-check-alt"
    // }
];

export default function Loteadores() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(beneficios.length / cardsPerPage);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleCards = beneficios.slice(
        currentIndex * cardsPerPage,
        (currentIndex + 1) * cardsPerPage
    );

    return (
        <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container py-4">
                
                {/* Header: Títulos e Descrição */}
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <p className="text-uppercase fw-light small mb-3" style={{ letterSpacing: '2px' }}>Loteadores e Incorporadoras</p>
                        <h2 className="display-4 mb-3" style={{ fontFamily: 'Axiforma, serif', color: '#000' }}>
                            Capte recursos para seus <br />empreendimentos com mais agilidade
                        </h2>
                        <p className="text-muted lh-lg">
                            A IB3 Capital conecta loteadores e incorporadoras a uma base de investidores interessados 
                            em projetos imobiliários estruturados.
                        </p>
                    </div>
                </div>

                <h5 className="fw-bold mb-4">VANTAGENS PARA SEU EMPREENDIMENTO</h5>

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
                        Saber mais
                    </button>
                </div>
            </div>

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
