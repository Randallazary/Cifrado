// src/componentes/Cesar.js
import React, { useState } from 'react';
import '../styles/FormularioCifrado.css';

function Cesar() {
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
        const desplazamiento = parseInt(formData.clave);
        const cifrado = formData.texto.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - base + desplazamiento) % 26) + base);
            }
            return char;
        }).join('');
        setFormData({ ...formData, datosCifrados: cifrado, datosDescifrados: null });
    };

    const descifrarDatos = () => {
        const desplazamiento = parseInt(formData.claveDescifrado);
        const descifrado = formData.datosCifrados.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - base - desplazamiento + 26) % 26) + base);
            }
            return char;
        }).join('');
        setFormData({ ...formData, datosDescifrados: descifrado });
    };

    return (
        <div className="formulario-cifrado">
            <h2>Cifrado César</h2>
            <input
                type="number"
                name="clave"
                placeholder="Clave (desplazamiento)"
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
                        placeholder="Ingresa la clave para descifrar"
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

export default Cesar;
