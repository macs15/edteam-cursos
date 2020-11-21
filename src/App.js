import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from './components/Incio';
import Cursos from './components/Cursos';
import Formulario from "./components/Formulario";
import Curso from "./components/Curso";
import CursoState from './context/CursoState';
import CustomRoute from "./components/Route/CurstomRoute";
function App() {
  return (
    <CursoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/cursos/nuevo-curso" component={Formulario} />
          <Route exact path="/cursos/:id" component={Curso} />
          <CustomRoute exact path="/cursos/:id/editar" component={Formulario} />
        </Switch>
      </Router>
    </CursoState>
  );
}

export default App;
