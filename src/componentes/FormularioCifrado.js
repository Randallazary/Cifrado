// src/componentes/FormularioCifrado.js
import React, { useState } from 'react';
import '../styles/FormularioCifrado.css';

function FormularioCifrado() {
    const [formData, setFormData] = useState({
        clave: '',
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        tarjetaCredito: '',
        contrasena: '',
    });

    const [datosCifrados, setDatosCifrados] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const cifrarDatos = () => {
        const cifrados = {
            nombre: btoa(formData.nombre),
            email: btoa(formData.email),
            direccion: btoa(formData.direccion),
            telefono: btoa(formData.telefono),
            tarjetaCredito: btoa(formData.tarjetaCredito),
            contrasena: btoa(formData.contrasena),
        };
        setDatosCifrados(cifrados);
    };

    return (
        <div className="formulario-cifrado">
            <h2>Cifrado de Datos</h2>
            <input
                type="text"
                name="clave"
                placeholder="Clave (16 caracteres)"
                onChange={handleChange}
            />
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                onChange={handleChange}
            />
            <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                onChange={handleChange}
            />
            <input
                type="text"
                name="tarjetaCredito"
                placeholder="Número de tarjeta de crédito"
                onChange={handleChange}
            />
            <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                onChange={handleChange}
            />
            <button onClick={cifrarDatos}>Cifrar</button>
            {datosCifrados && (
                <div className="datos-cifrados">
                    <h3>Datos Cifrados</h3>
                    <p>Nombre Encriptado: {datosCifrados.nombre}</p>
                    <p>Email Encriptado: {datosCifrados.email}</p>
                    <p>Dirección Encriptada: {datosCifrados.direccion}</p>
                    <p>Teléfono Encriptado: {datosCifrados.telefono}</p>
                    <p>Número de Tarjeta de Crédito Encriptado: {datosCifrados.tarjetaCredito}</p>
                    <p>Contraseña Cifrada: {datosCifrados.contrasena}</p>
                </div>
            )}
        </div>
    );
}

export default FormularioCifrado;
