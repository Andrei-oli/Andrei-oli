import React from 'react';
import '../css/style.css';
import Header from './Components/Header';
import Introducao from './Components/Introducao';
import Experiencia from './Components/Experiencia';
import Formacao from './Components/Formacao';

const App = () => {
  return (
    <>
      <body>
        <Header></Header>
        <Introducao></Introducao>
        <Experiencia></Experiencia>
        <Formacao></Formacao>
      </body>
    </>
  );
};

export default App;
