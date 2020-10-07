import { FORMULARIO_VIAJE } from "../types";

export default(state, action) => {
    switch(action.type) {
        case FORMULARIO_VIAJE:
            return {
                ...state,
                formulario: true
            }
        default: 
            return state;
    }
}