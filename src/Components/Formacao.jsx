import React from 'react';

const Formacao = () => {
  return (
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitulo">Formação</h2>
        <div>
          <p className="formacao-texto">
            Tenho <strong>Técnico</strong> em Mecatrônica, mas meu conhecimento
            em desenvovimento, programação e design foi construida com{' '}
            <strong>cursos intensivos</strong>.
          </p>
          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">TÉCNICO</span>
              <h3 className="faculdade-curso">Mecatrônica</h3>
              <span className="faculdade-instituicao">Evolut</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">TESTE</span>
              <h3 className="faculdade-curso">Desenvolvedor</h3>
              <span className="faculdade-instituicao">Exemplo</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">TESTE 2</span>
              <h3 className="faculdade-curso">Banco de Dados</h3>
              <span className="faculdade-instituicao">Exemplo</span>
            </li>
          </ul>
          <div className="formacao-extra">
            <div className="cursos">
              <h3>CURSOS INTENSIVOS</h3>
              <ul>
                <li>
                  UX Design & UI Design <span>17h</span>
                </li>
                <li>
                  React <span>18h</span>
                </li>
                <li>
                  Front End para iniciantes <span>30h</span>
                </li>
              </ul>
            </div>
            <div className="idiomas">
              <h3>IDIOMAS</h3>
              <ul>
                <li>
                  Inglês <span>/ Básico</span>
                </li>
                <li>
                  Português <span>/ (Teste)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
