import React from 'react';
import { useParams } from 'react-router-dom';
import { ListaPost } from '../components/ListaPost';

export const Subcategoria = () => {
  const { subcategoria } = useParams();
  console.log(subcategoria);
  return <ListaPost subcategoriaId={subcategoria} />;
};
