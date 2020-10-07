import React, { Fragment, useState } from "react";
import { calcularTransporte, obtenerIdaVuelta } from "../helpers";

const Formulario = ({ crearCita }) => {
  // Crear State de Huella
  const [huella, actualizarHuella] = useState({
    partida: "",
    termino: "",
    transporte: "",
    km: "",
    trabajadores: "",
    idaVuelta:""
  });

  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada vez que el usuario escribe en input
  const actualizarState = (e) => {
    actualizarHuella({
      ...huella,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores

  const { partida, termino, transporte, km, trabajadores, idaVuelta } = huella;

  // Cuando el usuario presiona agregar cita

  const submitHuella = (e) => {
    e.preventDefault();

    // Validar
    if (
      partida.trim() === "" ||
      termino.trim() === "" ||
      transporte.trim() === "" ||
      km.trim() === "" ||
      trabajadores.trim() === "" ||
      idaVuelta.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    // Eliminar el mensaje previo de error

    actualizarError(false);

    // Calcular huella 
    let huella = calcularTransporte(transporte) * km * obtenerIdaVuelta(idaVuelta); 

    // Crear la huella

    //crearCita(cita);
    //Reiniciar el form
    actualizarHuella({
      partida: "",
      termino: "",
      transporte: "",
      km: "",
      trabajadores: "",
      idaVuelta: ""
    });
  };

  return (
    <Fragment>
      <h2>Registrar Viaje</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitHuella}>
        <label>Dirección punto de partida</label>
        <input
          type="text"
          name="partida"
          className="u-full-width"
          placeholder="Dirección de punto de partida"
          onChange={actualizarState}
          value={partida}
        />
        <label>Dirección de punto de termino</label>
        <input
          type="text"
          name="termino"
          className="u-full-width"
          placeholder="Dirección de punto de termino"
          onChange={actualizarState}
          value={termino}
        />
        <label htmlFor="transporte"
        >Transporte</label>
        <select
              className="u-full-width"
              onChange={actualizarState}
              name="transporte"
            >
              <option value="">Seleccionar</option>
              <option value="metro">Metro</option>
              <option value="auto">Auto</option>
              <option value="camioneta">Camioneta</option>
              <option value="motocicleta">Motocicleta</option>  
              <option value="busTransantiago">BusTransantiago</option>
              <option value="bus">Bus</option>
              <option value="avionChile">Avi&oacute;n Chile</option>
              <option value="avionInternacional">Avi&oacute;n Internacional</option>    
              <option value="caminando">Caminando</option>
        </select>
        <label>Kilometros</label>
        <input
          type="text"
          name="km"
          className="u-full-width"
          onChange={actualizarState}
          value={km}
        />
        <label>Trabajadores</label>
        <input
          type="text"
          name="trabajadores"
          className="u-full-width"
          onChange={actualizarState}
          value={trabajadores}
        />
        <label
        htmlFor="idaVuelta"
        >Ida y Vuelta</label>
            <select
              className="u-full-width"
              onChange={actualizarState}
              name="idaVuelta"
            >
              <option value="">Seleccionar</option>
              <option value={true}>Verdadero</option>
              <option value={false}>Falso</option>  
              </select>
        <button type="submit" className="u-full-width button-primary">
          Agregar Viaje
        </button>
      </form>
    </Fragment>
  );
};


export default Formulario;
