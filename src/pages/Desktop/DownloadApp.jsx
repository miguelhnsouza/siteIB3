import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DownloadApp() {
  const navigate = useNavigate();

  const handleAndroidDownload = () => {
    window.open('https://play.google.com/store/apps/details?id=com.ibsystem.wallet&hl=pt_BR', '_blank');
  };

  const handleIOSDownload = () => {
    window.open('https://apps.apple.com/br/app/ib3-capital/id6448847940', '_blank');
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#0b0b0b' }}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            
            {/* Cabeçalho */}
            <h1 className="display-4 text-white mb-3" style={{ fontFamily: 'Axiforma, serif' }}>
              Sua jornada começa aqui
            </h1>
            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Crie sua conta em poucos minutos e tenha acesso exclusivo aos melhores ativos imobiliários tokenizados do mercado.
            </p>

            {/* Chamada para Ação */}
            <div className="mb-4">
              <h4 className="text-white fw-light mb-4" style={{ letterSpacing: '2px' }}>
                CADASTRE-SE E INVISTA PELO APP
              </h4>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {/* Botão Google Play */}
                <button 
                  className="btn-download-premium"
                  onClick={handleAndroidDownload}
                >
                  <i className="bi bi-google-play fs-3 me-3"></i>
                  <div className="text-start">
                    <small className="d-block opacity-75">Disponível no</small>
                    <span className="fw-bold">Google Play</span>
                  </div>
                </button>

                {/* Botão App Store */}
                <button 
                  className="btn-download-premium"
                  onClick={handleIOSDownload}
                >
                  <i className="bi bi-apple fs-3 me-3"></i>
                  <div className="text-start">
                    <small className="d-block opacity-75">Disponível na</small>
                    <span className="fw-bold">App Store</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Botão Voltar */}
            <div className="mt-5">
              <button 
                className="btn btn-link text-secondary text-decoration-none hover-white"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Voltar ao Site
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .btn-download-premium {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 15px 35px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          min-width: 220px;
        }

        .btn-download-premium:hover {
          background: #cdbba3;
          color: #061221;
          transform: translateY(-5px);
          border-color: #cdbba3;
          box-shadow: 0 10px 20px rgba(205, 187, 163, 0.2);
        }

        .hover-white:hover {
          color: white !important;
        }

        /* Ajuste para ícones do Bootstrap se não estiver usando FontAwesome */
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
      `}</style>
    </section>
  );
}