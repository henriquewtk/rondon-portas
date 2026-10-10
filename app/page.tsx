"use client";

import { useState } from "react";

const projetos = [
  { foto: "foto1.jpeg" },
  { foto: "foto2.jpeg" },
  { foto: "foto3.jpeg" },
  { foto: "foto4.jpeg" },
  { foto: "foto5.jpeg" },
  { foto: "foto6.jpeg" },
  { foto: "foto7.jpeg" },
  { foto: "foto8.jpeg" },
  { foto: "foto9.jpeg" },
  { foto: "foto10.jpeg" },
  { foto: "foto11.jpeg" },
  { foto: "foto12.jpeg" },
];

export default function Home() {
  const [fotoSelecionada, setFotoSelecionada] = useState<string | null>(null);

  return (
    <main>
      <header className="cabecalho">
        <a href="#inicio" className="marca">
          <span className="marca-simbolo">R</span>
          <span className="marca-texto">
            <strong>RONDON</strong>
            <small>PORTAS</small>
          </span>
        </a>

        <nav className="navegacao">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="https://wa.me/5564999983259" className="botao botao-cabecalho">
          Solicitar orçamento <svg
              viewBox="0 0 24 24"
              width="25"
              height="50"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.15 1.6 5.96L.04 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.5-8.41ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.41c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg><span></span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-conteudo">
          <span className="etiqueta">
            <span className="ponto"></span>
            QUALIDADE EM CADA DETALHE
          </span>

          <h1>
            A beleza da madeira.
            <br />
            O cuidado em cada
            <br />
            <span>detalhe.</span>
          </h1>

          <p className="hero-descricao">
            Instalação e reforma de portas de madeira com acabamento de
            qualidade, cuidado e atenção em cada serviço.
          </p>

          <div className="hero-acoes">
            <a href="#portfolio" className="botao botao-principal">
              Conheça nossos trabalhos <span></span>
            </a>
            <a href="#servicos" className="link-secundario">
              Nossos serviços <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="porta-cena">
            <div className="parede-lateral"></div>

            <div className="porta">
              <div className="porta-painel porta-painel-superior"></div>
              <div className="porta-painel porta-painel-inferior"></div>
              <div className="porta-macaneta">
                <span></span>
              </div>
            </div>

            <div className="sombra-porta"></div>
          </div>

          <div className="visual-legenda">
            <span>MADEIRA</span>
            <span className="visual-ornamento">✳</span>
            <span>QUALIDADE E ACABAMENTO</span>
          </div>
        </div>
      </section>

      <div className="faixa">
        <span>INSTALAÇÃO DE PORTAS</span>
        <span className="faixa-separador">✳</span>
        <span>REFORMA DE PORTAS</span>
      </div>

      <section className="secao servicos" id="servicos">
        <div className="secao-introducao">
          <span className="sobretitulo">O QUE FAZEMOS</span>
          <h2>
            Soluções para valorizar <span>seu ambiente.</span>
          </h2>
          <p>
            Cuidamos das suas portas com atenção aos detalhes, do início ao
            acabamento final.
          </p>
        </div>

        <div className="servicos-lista">
          <article className="servico">
            <span className="servico-numero">01</span>
            <div>
              <h3>Instalação de portas</h3>
              <p>
                Instalação cuidadosa de portas de madeira, buscando alinhamento,
                funcionamento adequado e um acabamento bem-feito.
              </p>
            </div>
            <a href="#contato" aria-label="Solicitar orçamento para instalação">
              ↗
            </a>
          </article>

          <article className="servico">
            <span className="servico-numero">02</span>
            <div>
              <h3>Reforma de portas</h3>
              <p>
                Recuperação e renovação de portas de madeira para melhorar sua
                aparência e valorizar o ambiente.
              </p>
            </div>
            <a href="#contato" aria-label="Solicitar orçamento para reforma">
              ↗
            </a>
          </article>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-topo">
          <div>
            <span className="sobretitulo">NOSSO TRABALHO</span>
            <h2>
              Projetos <span>realizados.</span>
            </h2>
          </div>

          <p>
            Conheça alguns dos trabalhos realizados pela Rondon Portas.
            Cada detalhe faz a diferença no resultado final.
          </p>
        </div>

        <div className="portfolio-grade">
          {projetos.map((projeto, indice) => (
            <article className="projeto" key={projeto.foto}>
              <div className="projeto-visual">
                <img
                  src={`/imagens/${projeto.foto}`}
                  alt={`Trabalho realizado pela Rondon Portas, foto ${indice + 1}`}
                  className="projeto-imagem"
                  loading={indice < 3 ? "eager" : "lazy"}
                  onClick={() => setFotoSelecionada(projeto.foto)}
                  style={{ cursor: "zoom-in" }}
                />

                <span className="projeto-numero">
                  {String(indice + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {fotoSelecionada && (
          <div
            className="foto-modal"
            onClick={() => setFotoSelecionada(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada do portfólio"
          >
            <button
              type="button"
              className="foto-modal-fechar"
              onClick={() => setFotoSelecionada(null)}
              aria-label="Fechar imagem"
            >
              ×
            </button>

            <img
              src={`/imagens/${fotoSelecionada}`}
              alt="Foto ampliada de um trabalho da Rondon Portas"
              className="foto-modal-imagem"
              onClick={(evento) => evento.stopPropagation()}
            />
          </div>
        )}
      </section>

      <section className="contato" id="contato">
        <div>
          <span className="sobretitulo">VAMOS CONVERSAR?</span>

          <h2>
            Seu próximo projeto
            <br />
            começa <span>aqui.</span>
          </h2>

          <p>
            Entre em contato para conversar sobre instalação ou reforma de
            portas de madeira. Será um prazer ajudar.
          </p>
        </div>

        
        
        <div className="contato-whatsapp">
          <a
            href="https://wa.me/5564999983259"
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao-claro"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.15 1.6 5.96L.04 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.5-8.41ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.41c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>
            Entre em contato pelo WhatsApp
          </a>
        </div>

      </section>

      <footer className="rodape">
        <a href="#inicio" className="marca marca-rodape">
          <span className="marca-simbolo">R</span>
          <span className="marca-texto">
            <strong>RONDON</strong>
            <small>PORTAS</small>
          </span>
        </a>
        
        <a href="#inicio">Voltar ao topo</a>
      </footer>
    </main>
  );
}