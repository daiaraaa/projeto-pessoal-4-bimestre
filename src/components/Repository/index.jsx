import './repository.css'

export default function Repository() {
    return (
      <section id="repository" className="repository">
        <div className="container">
          <h2>Projetos no github:</h2>
          <hr></hr>
          <div className="repository-grup">
            <div className="repository-proj">
              <h3>Projeto: Primeiro site em react</h3>
              <p>Um exemplo de site em react.</p>
              <a 
                href="https://github.com/daiaraaa/projeto-1-primeiro-site-em-react" target="_blank" rel="noopener noreferrer"className="repository-link"
              > Ver no GitHub </a>
            </div>

            <div className="repository-proj">
              <h3>Projeto: Criando um componente em React</h3>
              <p>Criando um componente em react.</p>
              <a 
                href="https://github.com/daiaraaa/projeto3-criando-um-componente-profile"  target="_blank" rel="noopener noreferrer" className="repository-link"
              > Ver no GitHub </a>
            </div>

            <div className="repository-proj">
              <h3>Projeto: Quiz história dinâmica</h3>
              <p>Um pequeno quiz sobre história geral.</p>
              <a 
                href="https://github.com/daiaraaa/projeto-pessoal-utilizando-todos-os-conceitos" target="_blank" rel="noopener noreferrer" className="repository-link"
              > Ver no GitHub </a>
            </div>

        <div className="repository-proj">
            <h3>Projeto: Site Black Clover</h3>
            <p>Um site que fala um pouco sobre o esquadrão dos Touros Negros do anime Black Clover. </p>
            <a 
              href="https://github.com/daiaraaa/proj-prog-web-site-black-clover" target="_blank" rel="noopener noreferrer" className="repository-link"
            > Ver no GitHub </a>
          </div>
          </div>
        </div>
      </section>
    )
  }
  
