import React, { Fragment } from 'react';
import viajeContext from '../context/viajeContext';
import ViajeState from '../context/viajeState';
import Formulario from "./Formulario";
import Viaje from "./Viaje";

const Principal = () => {


    return ( 
    <Fragment>
        <h1>Registre su Huella de Carbono Aquí</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario  />
            </div>
            <div className="one-half column">
              <h2>Viajes Registrados</h2>
                
            </div>
          </div>
        </div>
      </Fragment> 
      );
}
 
export default Principal;