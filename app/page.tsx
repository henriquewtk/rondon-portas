
const servicos = [
  {
    numero: "01",
    titulo: "Instalação de portas",
    descricao:
      "Instalação com atenção ao alinhamento, aos encaixes e ao acabamento de cada detalhe.",
  },
  {
    numero: "02",
    titulo: "Reforma de portas",
    descricao:
      "Renovação e recuperação de portas de madeira para valorizar e transformar seus ambientes.",
  },
];

const projetos = [
  { nome: "Portas de madeira", tipo: "Acabamento e detalhes", estilo: "porta-clara" },
  { nome: "Reforma de portas", tipo: "Renovação e cuidado", estilo: "porta-media" },
  { nome: "Instalação", tipo: "Precisão nos encaixes", estilo: "porta-escura" },
];

export default function Home() {
  return (
    <main>
      <header className="cabecalho">
        <a className="marca" href="#inicio" aria-label="Rondon Portas - início">
          <span className="marca-simbolo">RP</span>
          <span className="marca-texto">
            <strong>RONDON</strong>
            <small>PORTAS</small>
          </span>
        </a>

        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="botao botao-cabecalho" href="#contato">
          Solicitar atendimento <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-conteudo">
          <span className="etiqueta">
            <span className="ponto" /> PORTAS DE MADEIRA
          </span>

          <h1>
            A beleza da madeira.
            <br />
            <span>O cuidado em cada detalhe.</span>
          </h1>

          <p className="hero-descricao">
            Instalação e reforma de portas de madeira com atenção ao
            acabamento, qualidade e valorização do seu ambiente.
          </p>

          <div className="hero-acoes">
            <a className="botao botao-principal" href="#portfolio">
              Conheça nossos trabalhos <span aria-hidden="true">→</span>
            </a>
            <a className="link-secundario" href="#servicos">
              Conheça os serviços <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-assinatura">
            <span className="assinatura-linha" />
            <p>Trabalho cuidadoso, do início ao acabamento.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustração de uma porta de madeira">
          <div className="visual-legenda">
            <span>MADEIRA · DETALHES · QUALIDADE</span>
            <span>01 / 03</span>
          </div>

          <div className="porta-cena">
            <div className="parede-lateral" />
            <div className="porta">
              <div className="porta-painel porta-painel-superior" />
              <div className="porta-painel porta-painel-inferior" />
              <div className="porta-macaneta">
                <span />
              </div>
            </div>
            <div className="sombra-porta" />
          </div>

          <div className="visual-rodape">
            <span>O valor está nos detalhes.</span>
            <span className="visual-ornamento">✳</span>
          </div>
        </div>
      </section>

      <section className="faixa">
        <span>INSTALAÇÃO</span>
        <span className="faixa-separador">✳</span>
        <span>REFORMA</span>
        <span className="faixa-separador">✳</span>
        <span>ACABAMENTO</span>
        <span className="faixa-separador">✳</span>
        <span>CUIDADO EM CADA DETALHE</span>
      </section>

      <section className="secao servicos" id="servicos">
        <div className="secao-introducao">
          <span className="sobretitulo">O QUE FAZEMOS</span>
          <h2>
            Cuidado que transforma.
            <br />
            <span>Qualidade que aparece.</span>
          </h2>
          <p>
            Cada porta merece uma instalação bem-feita e um acabamento
            que valorize o ambiente.
          </p>
        </div>

        <div className="servicos-lista">
          {servicos.map((servico) => (
            <article className="servico" key={servico.numero}>
              <span className="servico-numero">{servico.numero}</span>
              <div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </div>
              <a href="#contato" aria-label={`Consultar sobre ${servico.titulo}`}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-topo">
          <div>
            <span className="sobretitulo">NOSSO TRABALHO</span>
            <h2>
              Feito para valorizar
              <br />
              <span>cada ambiente.</span>
            </h2>
          </div>
          <p>
            Em breve, você poderá conhecer aqui fotos e vídeos dos
            trabalhos realizados pela Rondon Portas.
          </p>
        </div>

        <div className="portfolio-grade">
          {projetos.map((projeto, indice) => (
            <article className="projeto" key={projeto.nome}>
              <div className={`projeto-visual ${projeto.estilo}`}>
                <div className="mini-porta">
                  <div className="mini-painel mini-painel-superior" />
                  <div className="mini-painel mini-painel-inferior" />
                  <span className="mini-macaneta" />
                </div>
                <span className="projeto-numero">0{indice + 1}</span>
              </div>
              <div className="projeto-info">
                <div>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.tipo}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-aviso">
          Imagens ilustrativas — substituiremos por fotos reais dos serviços.
        </p>
      </section>

      <section className="contato" id="contato">
        <div>
          <span className="sobretitulo">VAMOS CONVERSAR?</span>
          <h2>
            Sua próxima porta
            <br />
            começa com <span>um bom atendimento.</span>
          </h2>
          <p>
            Entre em contato para conversar sobre instalação ou reforma
            de portas de madeira.
          </p>
        </div>
        <a className="botao botao-claro" href="mailto:">
          WhatsApp em breve <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="rodape">
        <a className="marca marca-rodape" href="#inicio">
          <span className="marca-simbolo">RP</span>
          <span className="marca-texto">
            <strong>RONDON</strong>
            <small>PORTAS</small>
          </span>
        </a>
        <p>Portas de madeira · Instalação e reforma</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}