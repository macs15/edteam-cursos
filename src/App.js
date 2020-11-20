import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Formulario from "./components/Formulario";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nuevo-curso" component={Formulario} />
      </Switch>
    </Router>
  );
}

export default App;
