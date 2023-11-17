import React from 'react';
import Perfil from '../assets/img/Perfil.jpg';

const Introducao = () => {
  return (
    <main class="introducao">
      <img src={Perfil} alt="Lobo cinza" />
      <div>
        <h1>
          Desenvolvedor<br></br>Front-End &<br></br>UX/UI Designer
        </h1>
        <p>Localizado em Jundiai-SP ✌️</p>
      </div>
    </main>
  );
};

export default Introducao;
