import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cabecalho } from '../components/Cabecalho';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { Posts } from '../pages/Posts';
import { Sobre } from '../pages/Sobre';
import { Categoria } from '../pages/Categoria';

export const Router = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route path="/posts/:id">
          <Posts />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
