import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import '../assets/css/blog.css';
import { ListaCategorias } from '../components/ListaCategorias';
import { ListaPost } from '../components/ListaPost';
import { buscarCategoriasById } from '../api/PetshopApi/petshop-api';
import { Link } from 'react-router-dom';
import { Subcategoria } from './Subcategoria';

export const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await buscarCategoriasById(id);

      setSubcategorias(results.subcategorias);

      // const subsArray = results.reduce((accumulator, current) => {
      //   accumulator.push(current['subcategorias']);
      //   return accumulator;
      // }, []);
    })();
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost categoriaId={id} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <Subcategoria />
        </Route>
      </Switch>
    </>
  );
};
