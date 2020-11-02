import React, { useState, useEffect } from "react";
import { Button} from "react-bootstrap";
import { ReactComponent as ReactIcon} from "./assets/react.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
        <Link to="/">Home</Link>

          <Link to="/contacto">Contacto</Link>
          <Link to="/quien-soy">Quién soy</Link>
        </div>
     

      <Switch>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/quien-soy">
          <QuienSoy/>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
