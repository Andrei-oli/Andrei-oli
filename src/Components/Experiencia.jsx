import React from 'react';

const Experiencia = () => {
  return (
    <section class="experiencia" id="experiencia" aria-label="Experiência">
      <h2 class="subtitulo">
        Expe
        <br />
        riên
        <br />
        cia
      </h2>
      <div>
        <p class="experiencia-texto">
          Desenvolvo pequenos projetos como o portifólio, trabalhando no
          <strong> UX</strong> e <strong>UI Designer</strong>. Para o
          aplicativos web que desenvolvi voluntáriamente como o
          SGI(TechEducando), eu utilizei <strong>HTML</strong>,
          <strong> CSS</strong>,<strong> JavaScript </strong>e
          <strong> REACT</strong>.
        </p>
        <div class="empresa">
          <span class="empresa-ano">2022</span>
          <h3 class="empresa-titulo">TechEducando</h3>
          <span class="empresa-titulo">Voluntário</span>
          <p class="empresa-texto">
            O SGI é um projeto voluntário em fase de desenvolvimento em que
            estou responsavel pela parte de Front-end.
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
  );
};

export default Experiencia;
