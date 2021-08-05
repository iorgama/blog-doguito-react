import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buscarCategorias } from '../api/PetshopApi/petshop-api';
import '../assets/css/blog.css';

export const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await buscarCategorias();
      setCategorias(results);
    })();
  }, []);
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};
