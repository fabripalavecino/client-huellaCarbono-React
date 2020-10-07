import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import AlertaContext from '../context/alertaContext';
import AuthContext from '../context/authContext';

const Login = (props) => {

        // extraer los valores del context
        const alertaContext = useContext(AlertaContext);
        const { alerta, mostrarAlerta } = alertaContext;
    
        const authContext = useContext(AuthContext);
        const { mensaje, autenticado, iniciarSesion } = authContext;
    
          // En caso de que el password o usuario no exista
          useEffect(() => {
            if(autenticado) {
                props.history.push('/proyectos');
            }
    
            if(mensaje) {
                mostrarAlerta(mensaje.msg, mensaje.categoria);
            }
            // eslint-disable-next-line
        }, [mensaje, autenticado, props.history]);
    

    // State para iniciar sesión 

    const [ usuario, guardarUsuario ] = useState({
        email: "",
        password: ""
    })

    // Extraer de usuario 

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión 
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === "" || password === ""){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }
        //  Pasarlo al action
        iniciarSesion({ email, password });
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange}
                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />

                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn u-full-width btn-primario btn-block" 
                        value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;