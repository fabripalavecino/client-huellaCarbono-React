import React from 'react';
import Principal from "./components/Principal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tokenAuth from './config/token';
import Login from "./components/Login";
import NuevaCuenta from "./components/NuevaCuenta";

import ViajeState from "./context/viajeState";
import AuthState from "./context/authState";
import AlertaState from "./context/alertaState";


const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {

  return (
    <ViajeState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/viajes" component={Principal}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
   </ViajeState> 
  );
}

export default App;
