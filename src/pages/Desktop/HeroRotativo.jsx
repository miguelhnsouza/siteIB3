import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoIb3 from '../../assets/logo_ib3_branca.png';
import videoBg from '../../assets/videos/particle-video.mp4';

const itensRotativos = [
    { type: 'logo', content: logoIb3, alt: 'Logo IB3' },
    { type: 'frase', content: 'Transformando ideias em grandes projetos.', font: 'Axiforma, serif' },
    { type: 'frase', content: 'O futuro do investimento imobiliário.', font: 'Axiforma, sans-serif' },
    // Adicione mais itens conforme necessário
];

export default function HeroRotativo() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [animando, setAnimando] = useState(false); // Estado para controlar a animação

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimando(true);
            setTimeout(() => {
                setIndiceAtual((prevIndice) => (prevIndice + 1) % itensRotativos.length);
                setAnimando(false); 
            }, 500);
        }, 3000); 
        return () => clearInterval(timer);
    }, []); 

    const itemAtual = itensRotativos[indiceAtual];

    return (
        <section 
            className="hero-rotativo-section d-flex align-items-center justify-content-center text-center position-relative"
            style={{ 
                height: '40vh',
                color: '#fff' 
            }}
        >
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#000000ff', 
                    zIndex: -2 
                }}
            ></div>
            <video 
                autoPlay 
                muted 
                loop 
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: 0.2, 
                    zIndex: -1 
                }}
            >
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className={`hero-content ${animando ? 'fade-out' : 'fade-in'}`}>
                {itemAtual.type === 'logo' ? (
                    <img 
                        src={itemAtual.content} 
                        alt={itemAtual.alt} 
                        className="img-fluid" 
                        style={{ maxWidth: '25%', height: 'auto' }} 
                    />
                ) : (
                    <h2 
                        className="display-6 fw-normal" 
                        style={{ fontFamily: itemAtual.font || 'sans-serif', lineHeight: '1.2' }}
                    >
                        {itemAtual.content}
                    </h2>
                )}
            </div>

            <style>{`
                .hero-content {
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .hero-content.fade-in {
                    opacity: 1;
                }
                .hero-content.fade-out {
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}