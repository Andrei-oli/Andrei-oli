import React from 'react';
import AnDrei from '../assets/img/AnDrei.svg';

const Header = () => {
  return (
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
  );
};

export default Header;
