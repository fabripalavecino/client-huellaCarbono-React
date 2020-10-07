import React from 'react';

const Viaje = ({viaje}) => {
    return ( 
        <div className="viaje">
            <p>Partida:<span>{viaje.partida}</span></p>
            <p>Termino:<span>{viaje.termino}</span></p>
            <p>Transporte:<span>{viaje.transporte}</span></p>
            <p>Kilometros:<span>{viaje.km}</span></p>
            <p>Trabajadores:<span>{viaje.partida}</span></p>
            <p>Ida y Vuelta:<span>{viaje.idaVuelta}</span></p>
            <p>Huella:<span>{viaje.huella}</span></p>
        </div>
     );
}
 
export default Viaje;