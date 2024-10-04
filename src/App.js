// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import FormularioCifrado from './componentes/FormularioCifrado';
import XTEA from './componentes/XTEA';
import DSA from './componentes/DSA';
import Tiger from './componentes/Tiger';
import Cesar from './componentes/Cesar';
import Escitala from './componentes/Escitala';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<FormularioCifrado />} />
                    <Route path="/xtea" element={<XTEA />} />
                    <Route path="/dsa" element={<DSA />} />
                    <Route path="/tiger" element={<Tiger />} />
                    <Route path="/cesar" element={<Cesar />} />
                    <Route path="/escitala" element={<Escitala />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
