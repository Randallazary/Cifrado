// src/componentes/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/xtea">Cifrado XTEA</Link>
                </li>
                <li>
                    <Link to="/dsa">Cifrado DSA</Link>
                </li>
                <li>
                    <Link to="/tiger">Cifrado Tiger</Link>
                </li>
                <li>
                    <Link to="/escitala">Cifrado Escítala</Link>
                </li>
                <li>
                    <Link to="/cesar">Cifrado César</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
