import React from 'react';
import image from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

export const Page404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img
        className="doguito-imagem"
        src={image}
        alt="Imagem de página não encontrada"
      />
      <p className="naoencontrado-texto">
        Ops, essa página não pode ser exibida!
      </p>
    </main>
  );
};
