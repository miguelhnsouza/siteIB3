import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgPortal2 from '../../assets/img-portal2.png';
import imgGh from '../../assets/img-grandhill.png';
import imgPub from '../../assets/img-beachpub.png';

const imoveis = [
  {
    id: 1,
    nome: "Beach Pub",
    local: "Sacramento, MG / Rifaina, SP",
    imagem: imgPub,
    rendimento: "X",
    horizonte: "X",
    alocado: "X",
    preco: "X"
  },
  {
    id: 2,
    nome: "Grand Hill",
    local: "Sacramento, MG / Rifaina, SP",
    imagem: imgGh,
    rendimento: "X",
    horizonte: "X",
    alocado: "X",
    preco: "X"
  },
  {
    id: 3,
    nome: "Portal do Lago 2",
    local: "Sacramento, MG / Rifaina, SP",
    imagem: imgPortal2,
    rendimento: "X",
    horizonte: "X",
    alocado: "X",
    preco: "X"
  }
];

export default function Oportunidades() {
  return (
    <section id="oportunidades" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Axiforma, serif', color: '#061221' }}>
            Oportunidades de Investimento
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Conheça nossos imóveis disponíveis para investimento com segurança e transparência.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {imoveis.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 custom-card-invest">
                
                {/* Imagem com Badge */}
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                  <img 
                    src={item.imagem} 
                    className="card-img-top h-100 w-100 object-fit-cover" 
                    alt={item.nome}
                  />
                  <span className="position-absolute top-0 end-0 m-3 badge rounded-pill px-3 py-2" 
                        style={{ backgroundColor: '#283185', fontSize: '0.7rem', letterSpacing: '1px' }}>
                    INVESTIMENTO
                  </span>
                  <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <span className="badge text-dark fs-4 px-4 py-2 rounded-pill fw-bold" style={{backgroundColor: "#72c0d1"}}>
                      Em Breve
                    </span>
                  </div>
                </div>

                <div className="card-body p-4 text-start">
                  <h5 className="fw-bold mb-1">{item.nome}</h5>
                  <p className="text-muted small mb-4">
                    <i className="bi bi-geo-alt-fill me-1"></i>{item.local}
                  </p>

                  {/* Info Grid */}
                  <div className="d-flex justify-content-between mb-4">
                    <div>
                      <span className="d-block fw-bold text-dark">{item.rendimento}</span>
                      <small className="text-muted opacity-75">Rend. Anual</small>
                    </div>
                    <div className="text-center">
                      <span className="d-block fw-bold text-dark">{item.horizonte}</span>
                      <small className="text-muted opacity-75">Horizonte</small>
                    </div>
                    <div className="text-end">
                      <span className="d-block fw-bold text-dark">{item.alocado}</span>
                      <small className="text-muted opacity-75">Alocado</small>
                    </div>
                  </div>

                  <hr className="opacity-10" />

                  {/* Rodapé do Card */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Valor do Investimento</small>
                      <span className="h5 mb-0 fw-bold" style={{ color: '#283185' }}>R$ {item.preco}</span>
                    </div>
                    <button className="btn btn-dark rounded-pill px-4 btn-sm fw-bold" disabled>
                      Em Breve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .custom-card-invest {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 20px !important;
          overflow: hidden;
        }
        .custom-card-invest:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}