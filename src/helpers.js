export function calcularTransporte(transporte) {
    let gasto;

    switch (transporte) {
        case "metro":
            gasto = 0.033;
            break;
        case "auto":
            gasto = 0.21;
            break;
        case "camioneta":
            gasto = 0.249;
            break;
        case "motocicleta":
            gasto = 0.092;
            break;
        case "busTransantiago":
            gasto = 0.039;
            break;
        case "bus":
            gasto = 0.012;
            break;
        case "avionChile":
            gasto = 0.279;
            break;
        case "avionInternacional":
            gasto = 0.179;
            break;
        case "caminando":
            gasto = 0;
            break;    
        default:
            break;    
    }
    return gasto;
}

export function obtenerIdaVuelta(idaVuelta){
    return (idaVuelta === true) ? 2 : 1;  
}
