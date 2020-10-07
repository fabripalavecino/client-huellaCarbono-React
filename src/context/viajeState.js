import React,{ useReducer } from 'react';
import viajeContext from "./viajeContext";
import viajeReducer from "./viajeReducer";
import { FORMULARIO_VIAJE } from "../types";


const ViajeState = props => {
    const initialState = {
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    const  [ state, dispatch ] = useReducer(viajeReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_VIAJE
        })
    }

    return(
        <viajeContext.Provider
            value={{
               formulario: state.formulario,
               mostrarFormulario
            }}
        >
            {props.children}
        </viajeContext.Provider>
    )

}

export default ViajeState;