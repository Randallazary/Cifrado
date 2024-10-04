// src/componentes/DSA.js
import React, { useState } from 'react';
import '../styles/FormularioCifrado.css';

function DSA() {
    const [formData, setFormData] = useState({
        clavePrivada: '',
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        tarjetaCredito: '',
        contrasena: '',
        datosCifrados: null,
        claveDescifrado: '',
        datosDescifrados: null,
    });

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
        setFormData({ ...formData, datosCifrados: cifrados, datosDescifrados: null });
    };

    const descifrarDatos = () => {
        if (formData.claveDescifrado !== formData.clavePrivada) {
            alert('La clave es incorrecta');
            return;
        }

        const descifrados = {
            nombre: atob(formData.datosCifrados.nombre),
            email: atob(formData.datosCifrados.email),
            direccion: atob(formData.datosCifrados.direccion),
            telefono: atob(formData.datosCifrados.telefono),
            tarjetaCredito: atob(formData.datosCifrados.tarjetaCredito),
            contrasena: atob(formData.datosCifrados.contrasena),
        };
        setFormData({ ...formData, datosDescifrados: descifrados });
    };

    return (
        <div className="formulario-cifrado">
            <h2>Cifrado de Datos con DSA</h2>
            <input
                type="text"
                name="clavePrivada"
                placeholder="Clave Privada"
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

            {formData.datosCifrados && (
                <div className="datos-cifrados">
                    <h3>Datos Cifrados</h3>
                    <p>Nombre Encriptado: {formData.datosCifrados.nombre}</p>
                    <p>Email Encriptado: {formData.datosCifrados.email}</p>
                    <p>Dirección Encriptada: {formData.datosCifrados.direccion}</p>
                    <p>Teléfono Encriptado: {formData.datosCifrados.telefono}</p>
                    <p>Número de Tarjeta de Crédito Encriptado: {formData.datosCifrados.tarjetaCredito}</p>
                    <p>Contraseña Cifrada: {formData.datosCifrados.contrasena}</p>
                    <input
                        type="text"
                        name="claveDescifrado"
                        placeholder="Ingresa la clave para descifrar"
                        onChange={handleChange}
                    />
                    <button onClick={descifrarDatos}>Descifrar</button>
                </div>
            )}

            {formData.datosDescifrados && (
                <div className="datos-descifrados">
                    <h3>Datos Descifrados</h3>
                    <p>Nombre: {formData.datosDescifrados.nombre}</p>
                    <p>Email: {formData.datosDescifrados.email}</p>
                    <p>Dirección: {formData.datosDescifrados.direccion}</p>
                    <p>Teléfono: {formData.datosDescifrados.telefono}</p>
                    <p>Número de Tarjeta de Crédito: {formData.datosDescifrados.tarjetaCredito}</p>
                    <p>Contraseña: {formData.datosDescifrados.contrasena}</p>
                </div>
            )}
        </div>
    );
}

export default DSA;
