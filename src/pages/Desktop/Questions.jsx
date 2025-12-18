import React from "react";
import "@/pages/Desktop/questions.css";

const faqs = [
  {
    categoria: "Sobre a IB3 Capital",
    slug: "sobre-ib3",
    icon: "fas fa-building",
    perguntas: [
      {
        q: "O que é a IB3 Capital?",
        a: "A IB3 Capital é uma plataforma de investimentos que conecta investidores a oportunidades reais no mercado imobiliário. Por meio de tecnologia e processos estruturados, a IB3 permite a participação em empreendimentos selecionados de forma acessível, transparente e segura.",
      },
      {
        q: "A IB3 é uma instituição financeira?",
        a: "Não. Somos uma plataforma tecnológica de gestão que integra soluções financeiras de forma segura e regulamentada.",
      },
    ],
  },
  {
    categoria: "Boletos e Recebíveis",
    slug: "boletos-recebiveis",
    icon: "fas fa-file-invoice-dollar",
    perguntas: [
      {
        q: "Posso emitir boletos gratuitamente?",
        a: "Sim! A IB3 Capital permite a emissão de boletos gratuitos e ilimitados, com registro automático.",
      },
      {
        q: "Os boletos são registrados?",
        a: "Sim. Todos os boletos emitidos pela plataforma são registrados automaticamente, garantindo segurança e conformidade bancária.",
      },
      {
        q: "Há limite de boletos por mês?",
        a: "Não. A plataforma permite quantidade ilimitada.",
      },
      {
        q: "As cobranças podem ser acompanhadas em tempo real?",
        a: "Sim. Você acompanha pagamentos, baixas e pendências diretamente no painel ou aplicativo.",
      },
    ],
  },
  {
    categoria: "Segurança IB3 Capital",
    slug: "seguranca-ib3",
    icon: "fas fa-shield-alt",
    perguntas: [
      {
        q: "Meus dados estão protegidos?",
        a: "Sim. Utilizamos protocolos avançados de criptografia e tecnologias seguras para proteger dados, investimentos e recebíveis.",
      },
      {
        q: "A emissão de boletos é segura?",
        a: "Totalmente. Os boletos seguem padrões bancários e processos de registro obrigatórios.",
      },
    ],
  },
  {
    categoria: "Investidores",
    slug: "investidores",
    icon: "fas fa-chart-line",
    perguntas: [
      {
        q: "Quem pode investir pela IB3 Capital?",
        a: "Qualquer pessoa maior de 18 anos, que possua CPF regularizado e concorde com os termos da plataforma. Alguns projetos podem ter critérios específicos informados antes do investimento.",
      },
      {
        q: "Como faço para começar a investir?",
        a: "Basta criar uma conta na plataforma, completar seu cadastro, analisar os projetos disponíveis e escolher a oportunidade que melhor se encaixa no seu perfil. Todo o processo é digital, simples e transparente.",
      },
      {
        q: "Quanto posso ganhar investindo?",
        a: "O retorno varia conforme o projeto escolhido, o prazo do investimento e o modelo de remuneração. Todas as informações sobre rentabilidade estimada e riscos são apresentadas com clareza.",
      },
      {
        q: "Qual é o prazo médio dos investimentos?",
        a: "Os prazos variam de acordo com cada projeto, podendo ser de médio a longo prazo. O período estimado é informado na página de cada oportunidade.",
      },
      {
        q: "Quando e como recebo os rendimentos?",
        a: "Os rendimentos são pagos conforme o cronograma definido em cada projeto, podendo ocorrer de forma periódica ou ao final do investimento, creditados conforme o contrato.",
      },
      {
        q: "Posso resgatar meu investimento antes do prazo?",
        a: "Em geral, os investimentos possuem prazo determinado e não permitem resgate antecipado. Caso exista essa possibilidade, ela será informada previamente.",
      },
      {
        q: "Os rendimentos são garantidos?",
        a: "Como todo investimento, o imobiliário envolve riscos. Por isso, todas as informações sobre riscos, projeções e estrutura são apresentadas com transparência antes da aplicação.",
      },
    ],
  },
];

export default function Questions() {
  return (
    <section className="container py-5 faq-section" id="questions">
      <h1 className="fw-thin mb-5 text-center">Perguntas Frequentes</h1>
      
      <div className="row w-100">
        {/* Coluna Esquerda - Categorias */}
        <div className="col-md-4">
          <ul className="nav nav-pills flex-column" id="faqTabs">
            {faqs.map((cat, index) => (
              <li className="nav-item mb-2" key={cat.slug}>
                <button
                  className={`nav-link ${index === 0 ? "active" : ""} text-start w-100 py-3 px-4 fs-6 fw-bold`}
                  data-bs-toggle="pill"
                  data-bs-target={`#${cat.slug}`}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  <i className={`${cat.icon} me-2`}></i>
                  {cat.categoria}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Direita - Perguntas */}
        <div className="col-md-8">
          <div className="tab-content">
            {faqs.map((cat, index) => (
              <div className={`tab-pane fade ${index === 0 ? "show active" : ""}`} id={cat.slug} key={cat.slug}>
                <div className="accordion" id={`accordion-${cat.slug}`}>
                  {cat.perguntas.map((p, i) => (
                    <div className="accordion-item-question" key={i}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button collapsed fw-bold fs-5`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${cat.slug}-${i}`}
                          aria-expanded="false"
                        >
                          {p.q}
                        </button>
                      </h2>

                      <div
                        id={`collapse-${cat.slug}-${i}`}
                        className={`accordion-collapse collapse`}
                        data-bs-parent={`#accordion-${cat.slug}`}
                      >
                        <div className="accordion-body">{p.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
