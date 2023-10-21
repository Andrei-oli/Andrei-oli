import React from 'react';
import '../css/style.css';
import AnDrei from './assets/img/AnDrei.svg';
import Perfil from './assets/img/Perfil.jpg';

const App = () => {
  return (
    <>
      <body>
        <header class="header">
          <img src={AnDrei} alt="Andrei" />
          <nav>
            <ul class="header-menu">
              <li>
                <a href="#experiencia">Experiência</a>
              </li>
              <li>
                <a href="#formacao">Formação</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="introducao">
          <img src={Perfil} alt="Lobo cinza" />
          <div>
            <h1>
              Desenvolvedor<br></br>Front-End &<br></br>UX/UI Designer
            </h1>
            <p>Localizado em Jundiai-SP ✌️</p>
          </div>
        </main>
        <section class="experiencia" id="experiencia" aria-label="Experiência">
          <h2 class="subtitulo">Experiência</h2>
          <div>
            <p class="experiencia-texto">
              Desenvolvo pequenos projetos como o portifólio, trabalhando no
              <strong> UX</strong> e <strong>UI Designer</strong>. Para o
              aplicativo web que desenvolvi voluntáriamente, SGI(TechEducando),
              eu utilizei <strong>HTML</strong>, <strong>CSS</strong>,{' '}
              <strong>JavaScript </strong>e <strong>REACT</strong>.
            </p>
            <div class="empresa">
              <span class="empresa-ano">2022</span>
              <h3 class="empresa-titulo">TechEducando</h3>
              <span class="empresa-titulo">Voluntário</span>
              <p class="empresa-texto">
                Desenvolvo pequenos projetos como o Bickraft utilizando apenas
                HTML, CSS e JavaScript. Para aplicativos web como a rede social
                Dogs.
              </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default App;
