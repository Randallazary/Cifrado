// src/componentes/Escitala.js
import React, { useState } from 'react';
import '../styles/FormularioCifrado.css';

function Escitala() {
    const [formData, setFormData] = useState({
        clave: '',
        texto: '',
        datosCifrados: null,
        claveDescifrado: '',
        datosDescifrados: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const cifrarDatos = () => {
        const keyLength = parseInt(formData.clave);
        const rows = Math.ceil(formData.texto.length / keyLength);
        const grid = Array.from({ length: rows }, (_, i) =>
            formData.texto.slice(i * keyLength, (i + 1) * keyLength).padEnd(keyLength, ' ')
        );

        // Crear el cifrado por columnas
        let cifrado = '';
        for (let col = 0; col < keyLength; col++) {
            for (let row = 0; row < rows; row++) {
                cifrado += grid[row][col];
            }
        }

        setFormData({ ...formData, datosCifrados: cifrado.trim(), datosDescifrados: null });
    };

    const descifrarDatos = () => {
        const mensaje = formData.datosCifrados;  // Datos cifrados
        const columnas = parseInt(formData.claveDescifrado);  // Clave para descifrar
        const filas = Math.ceil(mensaje.length / columnas);
        let resultado = '';
        const matriz = [];

        // Llenar la matriz de forma inversa
        let index = 0;
        for (let c = 0; c < columnas; c++) {
            for (let f = 0; f < filas; f++) {
                if (!matriz[f]) matriz[f] = [];
                if (index < mensaje.length) {
                    matriz[f][c] = mensaje[index];
                    index++;
                }
            }
        }

        // Leer fila por fila
        for (let f = 0; f < filas; f++) {
            for (let c = 0; c < columnas; c++) {
                if (matriz[f][c]) resultado += matriz[f][c];
            }
        }

        setFormData({ ...formData, datosDescifrados: resultado.trim() });
    };

    return (
        <div className="formulario-cifrado">
            <h2>Cifrado Escítala</h2>
            <input
                type="number"
                name="clave"
                placeholder="Número de columnas"
                onChange={handleChange}
            />
            <textarea
                name="texto"
                placeholder="Texto a cifrar"
                onChange={handleChange}
            />
            <button onClick={cifrarDatos}>Cifrar</button>

            {formData.datosCifrados && (
                <div className="datos-cifrados">
                    <h3>Datos Cifrados</h3>
                    <p>{formData.datosCifrados}</p>
                    <input
                        type="number"
                        name="claveDescifrado"
                        placeholder="Ingresa el número de columnas para descifrar"
                        onChange={handleChange}
                    />
                    <button onClick={descifrarDatos}>Descifrar</button>
                </div>
            )}

            {formData.datosDescifrados && (
                <div className="datos-descifrados">
                    <h3>Datos Descifrados</h3>
                    <p>{formData.datosDescifrados}</p>
                </div>
            )}
        </div>
    );
}

export default Escitala;
