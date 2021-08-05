import React from 'react';
import { ListaCategorias } from '../components/ListaCategorias';
import { ListaPost } from '../components/ListaPost';

export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost />
    </main>
  );
};
